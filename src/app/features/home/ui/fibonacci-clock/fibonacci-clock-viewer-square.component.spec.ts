import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciClockViewerSquareComponent } from './fibonacci-clock-viewer-square.component';

describe('FibonacciClockViewerSquareComponent', () => {
  let component: FibonacciClockViewerSquareComponent;
  let fixture: ComponentFixture<FibonacciClockViewerSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibonacciClockViewerSquareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FibonacciClockViewerSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
