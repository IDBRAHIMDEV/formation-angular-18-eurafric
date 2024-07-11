import { Course } from './../../../models/course';
import { Component, inject } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';
import { FormsModule, NgForm } from '@angular/forms';
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

    myCourse: Course = {
      title: '',
      image: '',
      price: 0,
      body: '',
      active: false
    }

    persist(data: Course) {
      this.coursesService.add(data).subscribe({
        next: (res) => {
          
          this.router.navigateByUrl('/store/elearning/list')
        },
        error: (err) => {}
      })
    
    }

    info(title: any) {
      console.log(title)
    }

    submit(courseForm: NgForm) {
      if(courseForm.invalid) {
        return
      }

      this.persist(courseForm.value)
    } 
}
