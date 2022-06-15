import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Card2Component } from './card2.component';

const routes: Routes = [{ path: '', component: Card2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Card2RoutingModule { }
