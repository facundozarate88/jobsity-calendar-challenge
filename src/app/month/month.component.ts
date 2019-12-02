import { Component, OnInit, Input } from '@angular/core';
import { DateService } from '../services/date.service';

import * as Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);


@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {

  weekDayNames;
  weeks;

  constructor(
    public dateService: DateService,
  ) {
  }

  ngOnInit() {
    this.weekDayNames = this.dateService.weekDayNames;
    this.weeks = this.dateService.weeks;
  }

  handleClick() {
    console.log('ok');
  }

}
