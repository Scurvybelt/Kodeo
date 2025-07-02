import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NewsLatterComponent } from "../../../../../../shared/componates/news-latter/news-latter.component";

@Component({
  selector: 'app-hero-banner-crm',
  standalone: true,
  imports: [CarouselModule, NewsLatterComponent],
  templateUrl: './hero-banner-crm.component.html',
  styleUrl: './hero-banner-crm.component.scss'
})
export class HeroBannerCrmComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 60,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 5 }
    },
    slideBy: 2,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  };
}
