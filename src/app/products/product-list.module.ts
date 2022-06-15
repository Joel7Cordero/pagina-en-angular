import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { TopBarRoutingModule } from './top-bar/top-bar-routing.module';
import { ListProductRoutingModule } from './list-product/list-product-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    ListProductComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    ListProductRoutingModule,
    TopBarRoutingModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class ProductListModule { }
