import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-cyber-security-default',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './cyber-security-default.component.html',
  styleUrl: './cyber-security-default.component.scss'
})
export class CyberSecurityDefaultComponent {
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
    slideBy: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  };
}
