import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { IProducto } from '../../../Models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: IProducto[] = [];
  private _apiService = inject(ApiService);
  private _router = inject(Router);
  private initialized = false;  // Añadido para controlar la inicialización

  ngOnInit(): void {
    if (this.initialized) return;  // Verifica si ya se ha inicializado

    console.log("ngOnInit called");
    this.initialized = true;  // Marca como inicializado

    this._apiService.getProducts().subscribe({
      next: (data: IProducto[]) => {
        this.productList = data;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  navigate(id: number): void {
    this._router.navigate(['/products', id]);
  }
}
