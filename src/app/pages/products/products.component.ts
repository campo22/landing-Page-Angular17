import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router'; // Cambia 'express' por '@angular/router'
import { IProducto } from '../../../Models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],  // Elimina HttpClientModule
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: IProducto[] = [];
  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    console.log("ngOnInit called");

    this._apiService.getProducts().subscribe({
      next: (data: IProducto[]) => {
        this.productList = data;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  navigate(id: number): void {  // Corrige 'navegate' a 'navigate'
    this._router.navigate(['/products', id]);
  }
}
