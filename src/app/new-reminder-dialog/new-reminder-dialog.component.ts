import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DateService } from '../services/date.service';
import { Reminder } from '../reminder';

@Component({
  selector: 'app-new-reminder-dialog',
  templateUrl: './new-reminder-dialog.component.html',
  styleUrls: ['./new-reminder-dialog.component.scss']
})
export class NewReminderDialogComponent {

  constructor(
    public dateService: DateService,
    public dialogRef: MatDialogRef<NewReminderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reminder,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
