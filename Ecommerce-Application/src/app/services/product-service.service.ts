import { Injectable, input, signal } from '@angular/core';
import { ProductModel } from '../components/model/productModel.component';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products = signal<ProductModel[]>([]);

  addToCart(product: ProductModel)
  {
    this.products.set([...this.products(),product ]);
  }



  constructor() { }
}
