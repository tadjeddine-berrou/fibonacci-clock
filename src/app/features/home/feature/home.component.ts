import { FibonacciClockService } from '@home/data-access/services/fibonacci-clock.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'fc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  time$: Observable<string> = this.fibonacciClockService.time$;

  constructor(private fibonacciClockService: FibonacciClockService) {}

  ngOnInit(): void {
    this.fibonacciClockService.init();
  }

  onClockBack(): void {
    this.fibonacciClockService.onNavigateClock('back');
  }

  onClockNext(): void {
    this.fibonacciClockService.onNavigateClock('next');
  }

}
