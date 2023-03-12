import { Injectable } from '@angular/core';
import { FibonacciClockSquareColor } from '../models/fibonacci-clock.model';

@Injectable()
export class FibonacciClockUtilsService {

  readonly clockSequence: number[] = [1, 1, 2, 3, 5];

  private _findTargetCombinations(target: number): number[][] {
    const combinations: number[][] = [];
    this._findCombination(target, combinations);
    return combinations;
  }

  private _findCombination(
    target: number,
    combinations: number[][],
    path: number[] = [],
    index: number = 0,
    accumulator: number = 0
  ): void {
    for (let i = index; i < this.clockSequence.length; i++) {
      const currentPath = path.length ? [...path, i] : [i];
      const sum = accumulator + this.clockSequence[i];
      if (sum === target) {
        combinations.push([...currentPath]);
      } else if (sum < target) {
        this._findCombination(target, combinations, currentPath, i + 1, sum);
      } else {
        break;
      }
    }
  }

  public getFibonacciClock(hours: number, minutes: number = 0): number[][] {
    const hoursCombinations: number[][] = this._findTargetCombinations(hours);
    const minutesCombinations: number[][] = this._findTargetCombinations(Math.round(minutes/5));
    /** set possible clock combinations */
    const clockCombinations: number[][] = [];
    (hoursCombinations.length ? hoursCombinations : [[]]).forEach(clockHour => {
      (minutesCombinations.length ? minutesCombinations : [[]]).forEach(clockMinutes => {
        clockCombinations.push(this.clockSequence.map((_, index) => {
          const representsHour: boolean = clockHour.includes(index);
          const representsMinutes: boolean = clockMinutes.includes(index);
          if (representsHour && representsMinutes)
            return FibonacciClockSquareColor.Blue;
          else if (representsHour)
            return FibonacciClockSquareColor.Red;
          else if (representsMinutes)
            return FibonacciClockSquareColor.Green;
          else
            return FibonacciClockSquareColor.White;
        }))

      })
    });
    /** edge case: if hours == 1 && minutes == 0 that can be considered as hours = 0 & minutes = 60 */
    if (hours === 1 && minutes === 0)
      clockCombinations.push(this.clockSequence.map(() => FibonacciClockSquareColor.Green));
    return clockCombinations;
  }
}
