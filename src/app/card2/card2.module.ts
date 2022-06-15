import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Card2RoutingModule } from './card2-routing.module';
import { Card2Component } from './card2.component';


@NgModule({
  declarations: [
    Card2Component
  ],
  imports: [
    CommonModule,
    MatCardModule,
    Card2RoutingModule
  ]
})
export class Card2Module { }
