import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-help-desk-default',
  standalone: true,
  imports: [CarouselModule, CommonModule,CountUpModule,NgbAccordionModule],
  templateUrl: './help-desk-default.component.html',
  styleUrl: './help-desk-default.component.scss'
})
export class HelpDeskDefaultComponent {
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

  customOptionsOne: OwlOptions = {
    loop: true,
    margin:80,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    slideBy: 1,
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

  customOptionsFeedback: OwlOptions = {
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    slideBy: 1,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
}
