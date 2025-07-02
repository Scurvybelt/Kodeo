import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-service-v3',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './service-v3.component.html',
  styleUrl: './service-v3.component.scss'
})
export class ServiceV3Component {
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 2 }
    },
    slideBy: 2,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  };
}
