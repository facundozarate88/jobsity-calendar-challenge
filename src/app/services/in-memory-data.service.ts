import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Reminder } from '../reminder';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const reminders = [];
    return {reminders};
  }

  genId(reminder: Reminder[]): number {
    return reminder.length > 0 ? Math.max(...reminder.map(rem => rem.id)) + 1 : 1;
  }

}
