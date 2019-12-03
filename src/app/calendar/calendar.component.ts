import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewReminderDialogComponent } from '../new-reminder-dialog/new-reminder-dialog.component';
import { Reminder } from '../reminder';
import { ReminderService } from '../services/reminder.service';
import { DateService } from '../services/date.service';

import * as Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  menuTitle = 'Jobsity Calendar';
  allReminders: Reminder[];

  constructor(
    public dialog: MatDialog,
    private reminderService: ReminderService,
    private dateService: DateService,
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(NewReminderDialogComponent, {
      width: '300px',
      data: {
        city: '',
        color: '#FF8C00',
        date: this.dateService.currentDate,
        text: '',
        time: '00:00',
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.date = moment(result.date).format('YYYY-MM-DD');
        this.reminderService.addReminder(result as Reminder).subscribe(rem => {
          this.reminderService.getAllReminders();
        });
      }
    });
  }

}
