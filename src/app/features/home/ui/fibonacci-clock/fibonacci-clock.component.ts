import { FibonacciClockUtilsService } from '@home/utils/services/fibonacci-clock-utils.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fc-fibonacci-clock',
  templateUrl: './fibonacci-clock.component.html',
  styleUrls: ['./fibonacci-clock.component.scss']
})
export class FibonacciClockComponent {

  @Output() next: EventEmitter<void> = new EventEmitter<void>();
  @Output() back: EventEmitter<void> = new EventEmitter<void>();

  @Input()
  set time(time: string | null) {
    this._time = time ?? '00:00';
    const [hours, minutes] = this._time.split(':').map(Number);
    if (isNaN(hours) || isNaN(minutes)) {
      console.error('Please pass in correct time data (format: hh:mm)');
      return;
    }
    this.combinations = this.fibonacciClockUtilsService.getFibonacciClock(hours, minutes);
    /** select a random combination */
    this.selectedCombinationIndex = Math.floor(Math.random() * this.combinations.length);
  }
  get time(): string {
    return this._time;
  }
  private _time!: string;

  combinations: number[][] = [];
  selectedCombinationIndex: number = 0;

  constructor(private fibonacciClockUtilsService: FibonacciClockUtilsService) {}

}
