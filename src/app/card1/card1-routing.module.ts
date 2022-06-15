import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Card1Component } from './card1.component';

const routes: Routes = [
  { path: '', component: Card1Component },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Card1RoutingModule { }
