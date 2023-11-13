import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../iproduct';
import { ProductsService } from '../products.service';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatSidenavModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: IProduct[] | null = null; // Asignar un valor nulo predeterminado aquí
 
  constructor(private productsService: ProductsService) { }
 
  ngOnInit(): void {
     this.productsService.getAllProducts().subscribe(
       (products: IProduct[]) => {
         this.products = products;
       },
       (error: any) => {
         console.log('Ha ocurrido un error:', error);
       }
     );
  }
 }