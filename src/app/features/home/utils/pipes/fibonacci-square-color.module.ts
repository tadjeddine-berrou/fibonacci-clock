import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibonacciSquareColorPipe } from './fibonacci-square-color.pipe';



@NgModule({
  declarations: [
    FibonacciSquareColorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FibonacciSquareColorPipe
  ]
})
export class FibonacciSquareColorModule { }
