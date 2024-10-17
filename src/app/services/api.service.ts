import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private baseUrl = 'https://fakestoreapi.com/products';


  getProducts(): Observable<any> {
    return this._http.get(this.baseUrl);
  }

  getById(id: number): Observable<any> {
    return this._http.get(`${this.baseUrl}/${id}`);
  }

  posProduct(product: any): Observable<any> {
    return this._http.post(this.baseUrl, product);
  }



}
