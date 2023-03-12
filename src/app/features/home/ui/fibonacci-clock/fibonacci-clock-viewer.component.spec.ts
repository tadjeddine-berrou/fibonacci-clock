import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciClockViewerComponent } from './fibonacci-clock-viewer.component';

describe('FibonacciClockViewerComponent', () => {
  let component: FibonacciClockViewerComponent;
  let fixture: ComponentFixture<FibonacciClockViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibonacciClockViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FibonacciClockViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
