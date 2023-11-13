import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FilterbarComponent } from './filterbar/filterbar.component';
import { ProductsService } from '../products.service';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatSidenavModule, FilterbarComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: IProduct[];
  constructor( private service: ProductsService ) {
    this.service = service;
    this.products = [];
  }

  ngOnInit() {
    console.log( 'this.service', this.service );
    this.service.getAllProducts().then( ( result: IProduct[] ) => {
      this.products = result;
    } )
  }
}
