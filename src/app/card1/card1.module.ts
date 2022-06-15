import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Card1RoutingModule } from './card1-routing.module';
import { Card1Component } from './card1.component';


@NgModule({
  declarations: [
    Card1Component
  ],
  imports: [
    CommonModule,
    Card1RoutingModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class Card1Module { }
