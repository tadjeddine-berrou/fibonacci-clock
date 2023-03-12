import { FibonacciClockSquareColor } from './../models/fibonacci-clock.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fibonacciSquareColor'
})
export class FibonacciSquareColorPipe implements PipeTransform {

  transform(color: number): string {
    switch (color) {
      case FibonacciClockSquareColor.Red:
        return '#f00';
      case FibonacciClockSquareColor.Green:
        return '#0f0';
      case FibonacciClockSquareColor.Blue:
        return '#00f';
      default:
        return '#fff';
    }
  }

}
