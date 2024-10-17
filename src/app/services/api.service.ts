import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../../Models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private baseUrl = 'https://fakestoreapi.com/products';


  getProducts(): Observable<IProducto[]> {
    return this._http.get<IProducto[]>(this.baseUrl);
  }

  getById(id: number): Observable<IProducto> {
    return this._http.get<IProducto>(`${this.baseUrl}/${id}`);
  }

  posProduct(product: any): Observable<IProducto> {
    return this._http.post<IProducto>(this.baseUrl, product);
  }



}
