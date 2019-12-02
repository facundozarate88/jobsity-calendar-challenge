import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ReminderService } from '../services/reminder.service';
import { Reminder } from '../reminder';

import * as Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

const TIME_FORMAT = 'YYYY-MM-DD';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit, OnChanges {

  @Input() day;

  reminders: Reminder[];

  constructor(
    private reminderService: ReminderService,
  ) { }

  ngOnInit() {
    // this.reminders = this.reminderService.getReminders(this.day.format(TIME_FORMAT));
      // .subscribe((reminders: Reminder[]) => {
      //   this.reminders = reminders;
      // });
    this.reminderService.reminders$.subscribe(_ => {
      this.reminderService.getReminders(this.day.format(TIME_FORMAT)).subscribe(reminders => {
        reminders.sort((a, b) => {
          const timeA = moment(a.time, 'HH:mm');
          const timeB = moment(b.time, 'HH:mm');

          return timeA.unix() - timeB.unix();
        });
        this.reminders = reminders;
      });
    });
  }

  ngOnChanges() {
  }

  addEvent() {
    console.log(this.day.format('YYYY-MM-DD'));
  }

}
