import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-v2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-v2.component.html',
  styleUrl: './project-v2.component.scss',
  animations: [
    trigger('rowAdded', [
      transition(':enter', [
        style({ height: 0, opacity: 0, transform: 'translateY(-20px)' }),
        animate(
          '400ms ease-out',
          style({ height: '*', opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class ProjectV2Component {
  // Categories for filtering
  categories = [
    { name: 'All', filter: '*' },
    { name: 'Marketing', filter: 'market' },
    { name: 'Application', filter: 'application' },
    { name: 'Design', filter: 'design' },
    { name: 'Development', filter: 'dev' },
    { name: 'Branding', filter: 'brand' }
  ];

  // Projects array
  projects = [
    {
      categories: ['application', 'brand'],
      image: 'assets/images/media/img_44.jpg',
      title: 'App — The power of communication',
      type: 'Application'
    },
    {
      categories: ['design'],
      image: 'assets/images/media/img_45.jpg',
      title: 'UI/UX — Case Studies & Branding',
      type: 'UI/UX'
    },
    {
      categories: ['market', 'dev'],
      image: 'assets/images/media/img_46.jpg',
      title: 'UI — Banner Exploration',
      type: 'Website'
    },
    {
      categories: ['market', 'brand'],
      image: 'assets/images/media/img_47.jpg',
      title: 'Mockup — Calendar Design',
      type: 'Print Design'
    },
    {
      categories: ['application', 'dev'],
      image: 'assets/images/media/img_48.jpg',
      title: 'Poster — Product Branding',
      type: 'Branding'
    },
    {
      categories: ['design'],
      image: 'assets/images/media/img_49.jpg',
      title: 'Print — Calendar Design',
      type: 'Print Design'
    }
  ];

  activeFilter = '*'; // Default filter

  // Method to set the active filter
  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  // Method to check if a project matches the active filter
  isProjectVisible(project: any): boolean {
    return (
      this.activeFilter === '*' ||
      project.categories.includes(this.activeFilter)
    );
  }
}
