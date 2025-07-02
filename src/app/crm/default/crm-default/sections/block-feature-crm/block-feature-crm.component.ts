import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-block-feature-crm',
  standalone: true,
  imports: [NgbAccordionModule, CommonModule],
  templateUrl: './block-feature-crm.component.html',
  styleUrl: './block-feature-crm.component.scss'
})
export class BlockFeatureCrmComponent {
  activeButtonIndex: number = 0;
  buttons = [
    { icon: 'assets/images/icon/icon_23.svg', iconW: 'assets/images/icon/icon_23_w.svg', label: 'Finance & Payment' },
    { icon: 'assets/images/icon/icon_24.svg', iconW: 'assets/images/icon/icon_24_w.svg', label: 'Collaboration & Task' },
    { icon: 'assets/images/icon/icon_25.svg', iconW: 'assets/images/icon/icon_25_w.svg', label: 'Marketing Automation' },
    { icon: 'assets/images/icon/icon_23.svg', iconW: 'assets/images/icon/icon_23_w.svg', label: 'Chat & Support' }
  ];

  setActive(index: number): void {
    this.activeButtonIndex = index;
  }
}
