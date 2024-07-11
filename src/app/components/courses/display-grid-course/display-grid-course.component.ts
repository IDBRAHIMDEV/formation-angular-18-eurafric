import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-display-grid-course',
  standalone: true,
  imports: [],
  templateUrl: './display-grid-course.component.html',
  styleUrl: './display-grid-course.component.css'
})
export class DisplayGridCourseComponent {
  @Input({required: true}) courses: Course[] = []
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
