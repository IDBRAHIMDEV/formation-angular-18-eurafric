import { ListCoursesComponent } from './pages/courses/list-courses/list-courses.component';
import { UsersComponent } from './pages/users/users.component';
import { TodosComponent } from './pages/todos/todos.component';
import { ComptabiliteComponent } from './pages/comptabilite/comptabilite.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng18';
}
