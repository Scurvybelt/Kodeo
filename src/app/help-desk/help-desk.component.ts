import { Component } from '@angular/core';
import { LayoutType } from '../../shared/types/layout-type';
import { RouterModule } from '@angular/router';
import { GetFooterByTypeComponent } from '../../shared/componates/get-footer-by-type/get-footer-by-type.component';
import { GetHeaderByTypeComponent } from '../../shared/componates/get-header-by-type/get-header-by-type.component';

@Component({
  selector: 'app-help-desk',
  standalone: true,
  imports: [GetHeaderByTypeComponent, GetFooterByTypeComponent, RouterModule],
  templateUrl: './help-desk.component.html',
  styleUrl: './help-desk.component.scss'
})
export class HelpDeskComponent {
  allLayout = LayoutType;
}
