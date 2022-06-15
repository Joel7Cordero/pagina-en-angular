import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//RUTAS DE NAVEGACION
const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  { 
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'card1', loadChildren: () => import('./card1/card1.module').then(m => m.Card1Module) 
  },
  { 
    path: 'card2', loadChildren: () => import('./card2/card2.module').then(m => m.Card2Module) 
  },
  {
     path: 'card3', loadChildren: () => import('./card3/card3.module').then(m => m.Card3Module) 
  },
  {
    path: 'list-product', loadChildren: () => import('./products/product-list.module').then(m => m.ProductListModule) 
  },
  {
    path: 'cards', loadChildren: ()=> import('./cards/cards.module').then (m => m.CardsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
