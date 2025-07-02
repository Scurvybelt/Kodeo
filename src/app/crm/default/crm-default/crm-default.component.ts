import { Component } from '@angular/core';
import { HeroBannerCrmComponent } from "./sections/hero-banner-crm/hero-banner-crm.component";
import { BlockFeatureCrmComponent } from "./sections/block-feature-crm/block-feature-crm.component";
import { FeedbackCrmComponent } from "./sections/feedback-crm/feedback-crm.component";
import { PricingCrmComponent } from "./sections/pricing-crm/pricing-crm.component";
import { IntigrationCrmComponent } from "./sections/intigration-crm/intigration-crm.component";
import { FancyBannerCrmComponent } from "./sections/fancy-banner-crm/fancy-banner-crm.component";
import { FaqCrmComponent } from "./sections/faq-crm/faq-crm.component";

@Component({
  selector: 'app-crm-default',
  standalone: true,
  imports: [HeroBannerCrmComponent, BlockFeatureCrmComponent, FeedbackCrmComponent, PricingCrmComponent, IntigrationCrmComponent, FancyBannerCrmComponent, FaqCrmComponent],
  templateUrl: './crm-default.component.html',
  styleUrl: './crm-default.component.scss'
})
export class CrmDefaultComponent {

}
