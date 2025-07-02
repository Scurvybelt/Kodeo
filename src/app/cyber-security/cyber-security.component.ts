import { Component } from '@angular/core';
import { GetHeaderByTypeComponent } from "../../shared/componates/get-header-by-type/get-header-by-type.component";
import { GetFooterByTypeComponent } from "../../shared/componates/get-footer-by-type/get-footer-by-type.component";
import { LayoutType } from '../../shared/types/layout-type';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cyber-security',
  standalone: true,
  imports: [GetHeaderByTypeComponent, GetFooterByTypeComponent,RouterModule],
  templateUrl: './cyber-security.component.html',
  styleUrl: './cyber-security.component.scss'
})
export class CyberSecurityComponent {
  allLayout = LayoutType;
}
