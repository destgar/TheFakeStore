import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IProduct } from './iproduct';


const STORE_URL = 'https://fakestoreapi.com/';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private HttpClient: HttpClient) { }

  getAllProducts(): Observable<Array<IProduct>> {
    return this.HttpClient.get<Array<IProduct>>(
      `${STORE_URL}/products`
    )
  }

}