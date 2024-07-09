import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  title = "List of todos"
  todos: string[] = ["Learn Angular", "learn React"] 
}
