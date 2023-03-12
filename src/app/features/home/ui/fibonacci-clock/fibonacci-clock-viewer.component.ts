import { Component, Input } from '@angular/core';
import { FibonacciClockSquare, FibonacciClockSquareColor } from '@home/utils/models/fibonacci-clock.model';
import { FibonacciClockUtilsService } from '@home/utils/services/fibonacci-clock-utils.service';

@Component({
  selector: 'fc-fibonacci-clock-viewer',
  templateUrl: './fibonacci-clock-viewer.component.html',
  styleUrls: ['./fibonacci-clock-viewer.component.scss']
})
export class FibonacciClockViewerComponent {

  squares: FibonacciClockSquare[] = this.fibonacciClockUtilsService.clockSequence.map(value => ({
    value,
    color: FibonacciClockSquareColor.White
  }));

  @Input()
  set combination(combination: number[]) {
    this.updateView(combination);
  }

  constructor(private fibonacciClockUtilsService: FibonacciClockUtilsService) {}

  updateView(combination: number[]): void {
    this.squares = this.squares.map((square, i) => ({
      ...square,
      color: combination[i]
    }));
  }
}
