import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http: HttpClient){}
  getPostURl(){
   return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getShopURL(){
    return this.http.get('https://fakestoreapi.com/products');
  }
}
