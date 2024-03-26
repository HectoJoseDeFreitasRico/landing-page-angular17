import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  productList:IProduct[] = [];
  private _apiService = inject(ApiService)
  private _router = inject(Router)

  //para hacer peticiones nos suscribimos
  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data:IProduct[])=>{
      this.productList = data
    })
  }

  navegate(id:number){
    this._router.navigate(['products', id])
  }

}
