import { Component ,inject} from '@angular/core';
import { ProductModel } from '../../components/model/productModel.component';
import { ProductServiceService } from '../../services/product-service.service';
import { CartCardComponent } from "./cart-card/cart-card.component";

@Component({
  selector: 'app-cart',
  imports: [CartCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartService = inject(ProductServiceService);
  


}
