import { Component, inject, input, output } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
   label= input('');
  
   removeProduct = inject(ProductServiceService);
   
    sendMessage = output();
}
