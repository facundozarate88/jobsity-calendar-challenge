import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reminder } from '../reminder';

import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  private reminders: BehaviorSubject<boolean>;
  reminders$: Observable<boolean>;

  private remindersUrl = 'api/reminders';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) {
    this.reminders = new BehaviorSubject<boolean>(false);
    this.reminders$ = this.reminders.asObservable();

    // this.reminders$ = this.getAllReminders();
  }

  /** GET - Get all reminders */
  getAllReminders(): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(this.remindersUrl).pipe(
      tap(_ => {
        console.log('Reminders fetched');
      }),
      catchError(this.handleError<Reminder[]>('getReminders', []))
    );
  }

  /** GET - Get one or more reminder for a specific date */
  getReminders(term: string): Observable<Reminder[]> {
    if (!term.trim()) {
      return of([]);
    }
    const url = `${this.remindersUrl}/?date=${term}`;

    return this.http.get<Reminder[]>(url).pipe(
      tap(_ => {
        console.log(`Reminders found for date=${term}`);
      }),
      catchError(this.handleError<Reminder[]>(`getReminders for date=${term}`))
    );
  }

  /** POST - Add a new reminder */
  addReminder(reminder: Reminder): Observable<Reminder> {
    console.log(reminder);
    return this.http.post<Reminder>(this.remindersUrl, reminder, this.httpOptions).pipe(
      tap((newReminder: Reminder) => {
        console.log(`Reminded added on: ${newReminder.date}`);
        this.reminders.next(true);
      }),
      catchError(this.handleError<Reminder>('addReminder'))
    );
  }

  /** PUT - update the reminder */
  updateReminder(reminder: Reminder): Observable<any> {
    return this.http.put(this.remindersUrl, reminder, this.httpOptions).pipe(
      tap(_ => {
        console.log(`updated reminder for date=${reminder.date}`);
      }),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** ERROR HANDLER */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
