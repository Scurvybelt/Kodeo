import { Component } from '@angular/core';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [NgbAccordionModule,NgbModule],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss'
})
export class FaqSectionComponent {

}
