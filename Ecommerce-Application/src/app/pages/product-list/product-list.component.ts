import { Component,signal } from '@angular/core';
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductModel } from '../../components/model/productModel.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent {

  products = signal<ProductModel[]>(
    [
      {
        id:1,
        name:"Playstation 4 Controller",
        image:"https://png.pngtree.com/png-vector/20240927/ourmid/pngtree-video-game-controller-playstation-dualshock-4-black-matte-finish-ergonomic-design-png-image_13926082.png",
        price:160,
        stock:2
      
      },

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

      {
        id:4,
        name:"Gaming pc , core i9,7gen",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF6OLRfrzQviNJLAMmk8aRLA1q_FQ76zocdXPRO5xVXzsyqdAV5h3KPDQJqshtI_TsXzc&usqp=CAU",
        price:6000,
        stock:5
      
      },

      {
        id:5,
        name:"Gaming keyboard ,200mps",
        image:"https://w7.pngwing.com/pngs/963/199/png-transparent-computer-keyboard-machine-designer-tyrant-gold-mechanical-keyboard-free-s-game-electronics-free-logo-design-template-thumbnail.png",
        price:700,
    
      
      },

      {
        id:6,
        name:"Playstation 5 pro",
        image:"https://img.freepik.com/premium-psd/playstation-transparent-background_1136343-21969.jpg",
        price:7000,
        stock:9
      
      }
    ]
  )

}
