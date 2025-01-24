import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { ProductServiceService } from '../../services/product-service.service';


@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  cartService = inject(ProductServiceService);

    buttonMessage()
    {
      console.log("clicked");
    }
}
