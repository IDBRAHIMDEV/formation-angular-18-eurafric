import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CoursesService } from '../../../services/courses.service';
import { Course } from '../../../models/course';
import { FormsModule } from '@angular/forms';
import { omit } from 'lodash';

@Component({
  selector: 'app-edit-course',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})
export class EditCourseComponent  {
  route = inject(ActivatedRoute)

  coursesService = inject(CoursesService)
  router = inject(Router)

    myCourse: Course = {
      title: '',
      image: '',
      price: 0,
      body: '',
      active: false
    }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: ({id}) => {
        console.log(id)

        this.coursesService.one(id).subscribe({
          next: res => {
            this.myCourse = res
          }
        })

      },
      error: err => console.log(err)
    })
  }

  update() {
      
    if(this.myCourse.id) {
      this.coursesService.modify(omit(this.myCourse, ['id']), this.myCourse.id).subscribe({
        next: res => {
          this.router.navigate(['/store/elearning', 'list'])
        },
        error: err => {
          console.log(err)
        }
      })
    }
  }
}
