import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Card3RoutingModule } from './card3-routing.module';
import { Card3Component } from './card3.component';


@NgModule({
  declarations: [
    Card3Component
  ],
  imports: [
    CommonModule,
    MatCardModule,
    Card3RoutingModule
  ]
})
export class Card3Module { }
