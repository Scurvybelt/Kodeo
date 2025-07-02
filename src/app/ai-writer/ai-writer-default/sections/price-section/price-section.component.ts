import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

enum price {
  Monthly,
  Yearlly
}

@Component({
  selector: 'app-price-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-section.component.html',
  styleUrl: './price-section.component.scss'
})
export class PriceSectionComponent {
  allPrice = price
  selectedPrice = price.Monthly

}
