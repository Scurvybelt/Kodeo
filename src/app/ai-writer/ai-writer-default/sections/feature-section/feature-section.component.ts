import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-feature-section',
  standalone: true,
  imports: [CountUpModule, CommonModule],
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.scss'
})
export class FeatureSectionComponent {
  tabs = [
    {
      id: 'construct',
      label: 'Complete Sentence Re-construct',
      icon: 'assets/images/icon/icon_08.svg',
      icon_w: 'assets/images/icon/icon_08_w.svg',
      image: 'assets/images/assets/ils_05.svg',
    },
    {
      id: 'quality',
      label: 'Improve Quality',
      icon: 'assets/images/icon/icon_09.svg',
      icon_w: 'assets/images/icon/icon_09_w.svg',
      image: 'assets/images/assets/ils_06.svg',
    },
    {
      id: 'alternative',
      label: 'Alternative Sentence Generate',
      icon: 'assets/images/icon/icon_10.svg',
      icon_w: 'assets/images/icon/icon_10_w.svg',
      image: 'assets/images/assets/ils_07.svg',
    },
    {
      id: 'enrich',
      label: 'Enrich Text',
      icon: 'assets/images/icon/icon_11.svg',
      icon_w: 'assets/images/icon/icon_11_w.svg',
      image: 'assets/images/assets/ils_08.svg',
    },
    {
      id: 'article',
      label: 'AI pilot for article writing',
      icon: 'assets/images/icon/icon_12.svg',
      icon_w: 'assets/images/icon/icon_12_w.svg',
      image: 'assets/images/assets/ils_09.svg',
    },
    {
      id: 'split',
      label: 'Split Sentences',
      icon: 'assets/images/icon/icon_13.svg',
      icon_w: 'assets/images/icon/icon_13_w.svg',
      image: 'assets/images/assets/ils_10.svg',
    },
  ];

  // Store active tab ID
  activeTab: string = 'construct';

  // Method to set active tab
  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

}
