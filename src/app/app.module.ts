import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatDialogModule,
  MatDatepickerModule,
} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { MonthComponent } from './month/month.component';
import { WeekComponent } from './week/week.component';
import { DayComponent } from './day/day.component';
import { NewReminderDialogComponent } from './new-reminder-dialog/new-reminder-dialog.component';
import { ReminderComponent } from './reminder/reminder.component';
import { EditReminderDialogComponent } from './edit-reminder-dialog/edit-reminder-dialog.component';
import { DeleteRemindersDialogComponent } from './delete-reminders-dialog/delete-reminders-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MonthComponent,
    WeekComponent,
    DayComponent,
    NewReminderDialogComponent,
    ReminderComponent,
    EditReminderDialogComponent,
    DeleteRemindersDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatMomentDateModule,
  ],
  entryComponents: [NewReminderDialogComponent, EditReminderDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
