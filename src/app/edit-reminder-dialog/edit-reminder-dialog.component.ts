import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DateService } from '../services/date.service';
import { Reminder } from '../reminder';

@Component({
  selector: 'app-edit-reminder-dialog',
  templateUrl: './edit-reminder-dialog.component.html',
  styleUrls: ['./edit-reminder-dialog.component.scss']
})
export class EditReminderDialogComponent {

  constructor(
    public dateService: DateService,
    public dialogRef: MatDialogRef<EditReminderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reminder,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
