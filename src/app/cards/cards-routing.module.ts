import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Card1Component } from '../card1/card1.component';
import { Card2Component } from '../card2/card2.component';
import { Card3Component } from '../card3/card3.component';
import { HomeComponent } from '../home/home.component';
import { CardsComponent } from './cards.component';

const routes: Routes = [
    {
     path: '', component: CardsComponent 
    },
    {
      path: 'card1', component: Card1Component
    },
    {
      path: 'card2', component: Card2Component
    },
    {
      path: 'card3', component: Card3Component
    },
    {
      path: '**', component: HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
