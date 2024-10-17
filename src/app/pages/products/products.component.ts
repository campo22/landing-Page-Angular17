import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productList: any[] = [];

  private _apiService = inject(ApiService);


  ngOnInit(): void {
    this._apiService.getProducts().subscribe({
      next: (data) => {
        this.productList = data;
        console.log(data);
      }
    });
  }
}
