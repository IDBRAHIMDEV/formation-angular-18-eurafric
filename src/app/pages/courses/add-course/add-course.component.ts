import { Course } from './../../../models/course';
import { Component, inject } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {
  coursesService = inject(CoursesService)
  router = inject(Router)

    courses: Course[] = []

    myCourse: Course = {
      title: '',
      image: '',
      price: 0,
      body: '',
      active: false
    }

    persist() {
      this.coursesService.add(this.myCourse).subscribe({
        next: (res) => {
          
          this.router.navigateByUrl('/store/elearning/list')
        },
        error: (err) => {}
      })
    
    }
}
