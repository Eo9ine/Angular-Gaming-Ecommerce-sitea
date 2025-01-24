import { Component, inject, input } from '@angular/core';
import { ProductModel } from '../../../components/model/productModel.component';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { ProductListComponent } from '../product-list.component';
import { ProductServiceService } from '../../../services/product-service.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product= input.required<ProductModel>();

  productServie = inject(ProductServiceService)


}
