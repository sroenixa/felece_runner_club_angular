import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(categoryId: string): Observable<Product[]>{
    let path = "http://localhost:3000/products";
    if(categoryId !== undefined){
      path +="?categoryId="+categoryId; 
    }
    return this.http.get<Product[]>(path);
  }

  addProduct(product: Product):Observable<Product> {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Product>("http://localhost:3000/products",product,httpOptions);
  }
}
