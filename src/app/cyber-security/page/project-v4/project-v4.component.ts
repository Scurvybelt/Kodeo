import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-v4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-v4.component.html',
  styleUrl: './project-v4.component.scss'
})
export class ProjectV4Component {
  filters = [
    { label: 'All', value: '*' },
    { label: 'Marketing', value: 'market' },
    { label: 'Application', value: 'application' },
    { label: 'Design', value: 'design' },
    { label: 'Development', value: 'dev' },
    { label: 'Branding', value: 'brand' },
  ];

  galleryItems = [
    { categories: ['application', 'brand'], image: 'assets/images/media/img_52.jpg' },
    { categories: ['design'], image: 'assets/images/media/img_53.jpg' },
    { categories: ['market', 'dev'], image: 'assets/images/media/img_54.jpg' },
    { categories: ['market', 'brand'], image: 'assets/images/media/img_55.jpg' },
    { categories: ['application', 'dev'], image: 'assets/images/media/img_56.jpg' },
    { categories: ['design'], image: 'assets/images/media/img_57.jpg' },
    { categories: ['market', 'brand'], image: 'assets/images/media/img_58.jpg' },
    { categories: ['application', 'dev'], image: 'assets/images/media/img_59.jpg' },
    { categories: ['design'], image: 'assets/images/media/img_60.jpg' },
  ];

  activeFilter = '*';

  setActiveFilter(filter: string): void {
    this.activeFilter = filter;
  }

  isVisible(categories: string[]): boolean {
    return this.activeFilter === '*' || categories.includes(this.activeFilter);
  }
}
