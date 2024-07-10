import { Component, Input } from '@angular/core';
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
}
