import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Card3Component } from './card3.component';

const routes: Routes = [{ path: '', component: Card3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Card3RoutingModule { }
