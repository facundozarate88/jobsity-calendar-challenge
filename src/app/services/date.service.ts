import { Injectable } from '@angular/core';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

@Injectable({
  providedIn: 'root'
})
export class DateService {

  currentDate;
  monthStartDate;
  monthEndDate;
  calendarStartDate;
  calendarEndDate;

  weeks;
  weekDayNames;

  /** TODO It can be improved */
  constructor() {
    this.currentDate = moment(moment.now());
    this.weekDayNames = moment.weekdays();

    // First day of the month
    this.monthStartDate = moment(this.currentDate).startOf('month');
    // Last day of the month
    this.monthEndDate = moment(this.currentDate).endOf('month');

    // First day of the month calendar
    this.calendarStartDate = moment(this.currentDate).startOf('month').startOf('week');
    // Last day of the month calendar
    this.calendarEndDate = moment(this.currentDate).endOf('month').endOf('week');

    const monthRange = moment.range(this.calendarStartDate, this.calendarEndDate);
    this.weeks = Array.from(monthRange.by('weeks'));
  }

  getWeekDays(week) {
    const firstDay = moment(week).startOf('week');
    const lastDay = moment(week).endOf('week');
    const weekRange = moment.range(firstDay, lastDay);
    return Array.from(weekRange.by('days'));
  }
}
