import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CoursesService } from '../../../services/courses.service';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-show-course',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './show-course.component.html',
  styleUrl: './show-course.component.css'
})
export class ShowCourseComponent {

  route = inject(ActivatedRoute)

  coursesService = inject(CoursesService)
  

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
 }
