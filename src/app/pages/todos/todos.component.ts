import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  title = "List of todos"
  todoId!: number

  editable: boolean = false

  todo: string = ""
  todos: string[] = ["Learn Angular", "learn React", "Spring boot", "NodeJS"] 

  addTodo() {
    this.todos = [this.todo, ...this.todos]
    this.initTodo()
  }

  destroyTodo(i: number) {

    // if(!confirm("Are you sure to delete this item" + i)) {
    //   return
    // }


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this item",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        this.todos = this.todos.filter((item, index) => index !== i)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          timer: 3000,
          timerProgressBar: true
        });
      }
    });


    // this.todos = this.todos.filter((item, index) => index !== i)

  }

  editTodo(index: number, todo: string) {
    this.todoId = index
    this.todo = todo
    this.editable = true
  }

  updateTodo() {
    this.todos[this.todoId] = this.todo
    this.initTodo()
  }

  initTodo() {
    this.todo = ""
    this.editable = false
  }
}
