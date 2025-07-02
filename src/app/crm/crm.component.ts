import { Component } from '@angular/core';
import { GetHeaderByTypeComponent } from "../../shared/componates/get-header-by-type/get-header-by-type.component";
import { GetFooterByTypeComponent } from "../../shared/componates/get-footer-by-type/get-footer-by-type.component";
import { RouterModule } from '@angular/router';
import { LayoutType } from '../../shared/types/layout-type';

@Component({
  selector: 'app-crm',
  standalone: true,
  imports: [GetHeaderByTypeComponent, GetFooterByTypeComponent,RouterModule],
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.scss'
})
export class CrmComponent {
  allLayout=LayoutType;
}
