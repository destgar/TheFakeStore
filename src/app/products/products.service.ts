import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IProduct } from './iproduct';

const STORE_URL = 'https://fakestoreapi.com/';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private HttpClient: HttpClient ) {
  }

  getAllProducts(): Promise<any> {
    // TODO figure out why http client is not working
    // return this.HttpClient.get<Array<IProduct>>(
    //   `${STORE_URL}/products`
    // )
    return fetch('https://fakestoreapi.com/products')
      .then( res=>res.json() );
  }

}
