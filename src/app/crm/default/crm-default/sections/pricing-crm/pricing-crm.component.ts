import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
enum Price {
  Monthly,
  Yearly
}
@Component({
  selector: 'app-pricing-crm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-crm.component.html',
  styleUrl: './pricing-crm.component.scss'
})
export class PricingCrmComponent {
  allPriceList = Price;
  selectedPrice = Price.Monthly
}
