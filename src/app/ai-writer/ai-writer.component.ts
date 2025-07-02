import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutType } from '../../shared/types/layout-type';
import { GetHeaderByTypeComponent } from '../../shared/componates/get-header-by-type/get-header-by-type.component';
import { GetFooterByTypeComponent } from '../../shared/componates/get-footer-by-type/get-footer-by-type.component';
import { BackToTopComponent } from '../../shared/componates/back-to-top/back-to-top.component';

@Component({
  selector: 'app-ai-writer',
  standalone: true,
  imports: [RouterModule,GetHeaderByTypeComponent,GetFooterByTypeComponent,BackToTopComponent ],
  templateUrl: './ai-writer.component.html',
  styleUrl: './ai-writer.component.scss'
})
export class AiWriterComponent {
  allLayout = LayoutType;
}
