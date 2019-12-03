import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Reminder } from '../reminder';
import { EditReminderDialogComponent } from '../edit-reminder-dialog/edit-reminder-dialog.component';

import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
import { ReminderService } from '../services/reminder.service';

const moment = extendMoment(Moment);

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent {

  @Input() reminder: Reminder;

  constructor(
    public dialog: MatDialog,
    private reminderService: ReminderService,
  ) { }

  editReminder() {
    const dialogRef = this.dialog.open(EditReminderDialogComponent, {
      width: '300px',
      data: this.reminder,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.date = moment(result.date).format('YYYY-MM-DD');
        this.reminderService.updateReminder(result as Reminder);
      }
    });
  }

}
