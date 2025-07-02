import { Component } from '@angular/core';
import { FancyBannerComponent } from '../../../../index-1/default/fancy-banner/fancy-banner.component';
import { AiWriterFancyBannerSectionComponent } from '../../../ai-writer-default/sections/ai-writer-fancy-banner-section/ai-writer-fancy-banner-section.component';

@Component({
  selector: 'app-team-v2',
  standalone: true,
  imports: [AiWriterFancyBannerSectionComponent],
  templateUrl: './team-v2.component.html',
  styleUrl: './team-v2.component.scss'
})
export class TeamV2Component {

}
