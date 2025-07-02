import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about-us-v3',
  standalone: true,
  imports: [CarouselModule,CountUpModule,NgbAccordionModule],
  templateUrl: './about-us-v3.component.html',
  styleUrl: './about-us-v3.component.scss'
})
export class AboutUsV3Component {
  customOptions: OwlOptions = {
    loop: true,
    margin: 50,
    nav: false,
    dots: false,
    autoplay: true,
    items: 2,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    slideBy: 6,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  };
}
