import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FibonacciClockModule } from '@home/ui/fibonacci-clock/fibonacci-clock.module';
import { FibonacciClockService } from '@home/data-access/services/fibonacci-clock.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FibonacciClockModule
  ],
  providers: [
    DecimalPipe,
    FibonacciClockService
  ]
})
export class HomeModule { }
