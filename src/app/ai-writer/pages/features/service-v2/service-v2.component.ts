import { Component } from '@angular/core';
import { AiWriterFancyBannerSectionComponent } from '../../../ai-writer-default/sections/ai-writer-fancy-banner-section/ai-writer-fancy-banner-section.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-v2',
  standalone: true,
  imports: [AiWriterFancyBannerSectionComponent, CommonModule, CarouselModule],
  templateUrl: './service-v2.component.html',
  styleUrl: './service-v2.component.scss'
})
export class ServiceV2Component {
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 6 }
    },
    slideBy: 2,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  };


}
