import { TestBed } from '@angular/core/testing';

import { FibonacciClockUtilsService } from './fibonacci-clock-utils.service';

describe('FibonacciClockUtilsService', () => {
  let service: FibonacciClockUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FibonacciClockUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
