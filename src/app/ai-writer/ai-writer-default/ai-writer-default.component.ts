import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { FeatureSectionComponent } from './sections/feature-section/feature-section.component';
import { FeedbackSectionComponent } from './sections/feedback-section/feedback-section.component';
import { IntigrationSectionComponent } from './sections/intigration-section/intigration-section.component';
import { PriceSectionComponent } from './sections/price-section/price-section.component';
import { FaqSectionComponent } from './sections/faq-section/faq-section.component';
import { AiWriterFancyBannerSectionComponent } from './sections/ai-writer-fancy-banner-section/ai-writer-fancy-banner-section.component';

@Component({
  selector: 'app-ai-writer-default',
  standalone: true,
  imports: [CarouselModule,CommonModule,FeatureSectionComponent,FeedbackSectionComponent,IntigrationSectionComponent,PriceSectionComponent,FaqSectionComponent,AiWriterFancyBannerSectionComponent],
  templateUrl: './ai-writer-default.component.html',
  styleUrl: './ai-writer-default.component.scss'
})
export class AiWriterDefaultComponent {
  logos = [
    'assets/images/logo/p_logo_01.png',
    'assets/images/logo/p_logo_02.png',
    'assets/images/logo/p_logo_03.png',
    'assets/images/logo/p_logo_04.png',
    'assets/images/logo/p_logo_05.png',
    'assets/images/logo/p_logo_06.png',
    'assets/images/logo/p_logo_04.png',
  ];

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    items: 6,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    slideBy: 6,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  };
}
