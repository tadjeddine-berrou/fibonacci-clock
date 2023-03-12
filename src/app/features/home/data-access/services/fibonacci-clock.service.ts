import { DecimalPipe, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class FibonacciClockService {

  private _time$: BehaviorSubject<string> = new BehaviorSubject<string>('0:0');
  private _isBrowser: boolean = isPlatformBrowser(this.platformId);

  get time$(): Observable<string> {
    return this._time$.asObservable();
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private decimalPipe: DecimalPipe
  ) { }

  init(): void {
    if (!this._isBrowser) return;
    const time: string | null = localStorage.getItem('time');
    time && this._time$.next(time ?? '0:0');
  }

  onNavigateClock(dir: 'next' | 'back'): void {
    let [hours, minutes] = this._time$.getValue().split(':').map(Number);

    if (dir === 'next') {
      minutes += 5;
      if (minutes === 60) {
        hours += 1;
        minutes = 0;
        if (hours === 13) hours = 1;
      }
    } else {
      minutes -= 5;
      if (minutes < 0) {
        hours -= 1;
        minutes = 55;
        if (hours < 1) hours = 12;
      }
    }

    const time = this._formatTime(hours, minutes);
    this._emitTimeChange(time);
  }

  private _emitTimeChange(time: string): void {
    this._time$.next(time);
    this._saveTime(time);
  }

  private _saveTime(time: string): void {
    if (!this._isBrowser) return;
    localStorage.setItem('time', time);
  }

  private _formatTime(hours: number, minutes: number): string {
    return `${this._formatNumber(hours)}:${this._formatNumber(minutes)}`
  }

  private _formatNumber(number: number): string {
    return this.decimalPipe.transform(number, '2.0-0') as string;
  }
}
