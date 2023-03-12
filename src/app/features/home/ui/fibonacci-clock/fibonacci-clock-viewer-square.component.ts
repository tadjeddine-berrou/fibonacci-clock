import { Component, Input } from '@angular/core';
import { FibonacciClockSquare } from '@home/utils/models/fibonacci-clock.model';

@Component({
  selector: 'fc-fibonacci-clock-viewer-square',
  templateUrl: './fibonacci-clock-viewer-square.component.html',
  styleUrls: ['./fibonacci-clock-viewer-square.component.scss']
})
export class FibonacciClockViewerSquareComponent {

  @Input() square!: FibonacciClockSquare;

}
