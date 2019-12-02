import { Component, OnInit, Input } from '@angular/core';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

  @Input() week;

  weekDays;

  constructor(
    public dateService: DateService,
  ) {}

  ngOnInit() {
    this.weekDays = this.dateService.getWeekDays(this.week);
  }

}
