import { GridComponent } from './../../components/grid/grid.component';
import { TableComponent } from './../../components/table/table.component';
import { SidebarComponent } from './../../components/sidebar/sidebar.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/shared/footer/footer.component';

@Component({
  selector: 'app-comptabilite',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, TableComponent, GridComponent, FooterComponent],
  templateUrl: './comptabilite.component.html',
  styleUrl: './comptabilite.component.css'
})
export class ComptabiliteComponent {

}
