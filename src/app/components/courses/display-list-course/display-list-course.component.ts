import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../models/course';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-display-list-course',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './display-list-course.component.html',
  styleUrl: './display-list-course.component.css'
})
export class DisplayListCourseComponent {

  @Input() courses: Course[] = []
  @Output() delete = new EventEmitter()
  @Output() edit = new EventEmitter()

  requestDeleteCourse(id: number) {
    console.log('request from child')
    this.delete.emit({id: id, message: 'Daddy i want delete this course please!'})
  }

  requestEditCourse(course: Course) {
    this.edit.emit(course)
  }
}
