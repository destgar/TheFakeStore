import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './products.service';

import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
