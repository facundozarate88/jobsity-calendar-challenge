import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Reminder } from '../reminder';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const reminders = [
      {
        city: 'La Plata',
        color: '#d14343',
        date: '2019-12-01',
        text: 'My reminder',
        time: '02:23'
      },
      {
        city: 'La Plata',
        color: '#88888',
        date: '2019-12-02',
        text: 'My reminder',
        time: '02:22'
      },
      {
        city: 'La Plata',
        color: 'blue',
        date: '2019-12-03',
        text: 'My reminder',
        time: '02:22'
      },
      {
        city: 'La Plata',
        color: 'pink',
        date: '2019-12-04',
        text: 'My reminder',
        time: '02:22'
      },
      {
        city: 'La Plata',
        color: '#d14343',
        date: '2019-12-05',
        text: 'My reminder',
        time: '02:22'
      }
    ];
    return {reminders};
  }

  genId(reminder: Reminder[]): number {
    return reminder.length > 0 ? Math.max(...reminder.map(rem => rem.id)) + 1 : 1;
  }

}
