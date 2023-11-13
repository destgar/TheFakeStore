import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './products.service';

import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule
  ],
  providers: [ProductsService, HttpClient]
})
export class ProductsModule { }
