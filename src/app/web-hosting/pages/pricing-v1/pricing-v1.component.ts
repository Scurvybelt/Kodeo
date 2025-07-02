import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
enum Plans {
  Monthy,
  Yearly
}
@Component({
  selector: 'app-pricing-v1',
  standalone: true,
  imports: [CommonModule,NgbAccordionModule],
  templateUrl: './pricing-v1.component.html',
  styleUrl: './pricing-v1.component.scss'
})
export class PricingV1Component {
  plans = Plans
  selectedPlan = Plans.Monthy
}
