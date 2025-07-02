import { Component } from '@angular/core';
import { AiWriterFancyBannerSectionComponent } from '../../../ai-writer-default/sections/ai-writer-fancy-banner-section/ai-writer-fancy-banner-section.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aboutus-v2',
  standalone: true,
  imports: [AiWriterFancyBannerSectionComponent,RouterModule],
  templateUrl: './aboutus-v2.component.html',
  styleUrl: './aboutus-v2.component.scss'
})
export class AboutusV2Component {

}
