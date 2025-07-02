import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-feedback-crm',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './feedback-crm.component.html',
  styleUrl: './feedback-crm.component.scss'
})
export class FeedbackCrmComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    },
    slideBy: 2,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  };
}
