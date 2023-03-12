import { FibonacciSquareColorModule } from './../../utils/pipes/fibonacci-square-color.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibonacciClockComponent } from './fibonacci-clock.component';
import { FibonacciClockUtilsService } from '@home/utils/services/fibonacci-clock-utils.service';
import { FibonacciClockViewerComponent } from './fibonacci-clock-viewer.component';
import { FibonacciClockViewerSquareComponent } from './fibonacci-clock-viewer-square.component';
import { MatButtonModule } from '@angular/material/button';

const MaterialModules = [
  MatButtonModule
];


@NgModule({
  declarations: [
    FibonacciClockComponent,
    FibonacciClockViewerComponent,
    FibonacciClockViewerSquareComponent
  ],
  imports: [
    CommonModule,
    FibonacciSquareColorModule,
    MaterialModules
  ],
  exports: [
    FibonacciClockComponent
  ],
  providers: [
    FibonacciClockUtilsService
  ]
})
export class FibonacciClockModule { }
