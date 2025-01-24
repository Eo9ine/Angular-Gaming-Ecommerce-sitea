import { Component,input } from '@angular/core';
import { ProductModel } from '../../../components/model/productModel.component';
import { ProductServiceService } from '../../../services/product-service.service';
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
  selector: 'app-cart-card',
  imports: [ButtonComponent],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.scss'
})
export class CartCardComponent {

  

  product = input.required<ProductModel>();
}
