import { Injectable, input, signal } from '@angular/core';
import { ProductModel } from '../components/model/productModel.component';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products = signal<ProductModel[]>([
    {
      id:2,
      name:"Xbox Controller",
      image:"https://i.pinimg.com/474x/51/c6/30/51c630a7d4e88cfd5d0d79fe05366996.jpg",
      price:100,
      stock:2
    
    },

    {
      id:3,
      name:"Gaming Headphone",
      image:"https://img.freepik.com/free-psd/beautiful-gaming-headphone-isolated-transparent-background_84443-1567.jpg",
      price:350,
    
    },
  ]);

  addToCart(product: ProductModel)
  {
    this.products.set([...this.products(),product ]);
  }

  removeFromCart(product: ProductModel)
  {
    this.products.set(this.products().filter(p => p.id !== product.id));
  }


  constructor() { }
}
