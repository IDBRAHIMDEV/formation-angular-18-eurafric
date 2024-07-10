import { JsonPipe, NgClass, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Course } from '../../../models/course';
import { FormsModule } from '@angular/forms';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-list-courses',
  standalone: true,
  imports: [NgClass, NgStyle, FormsModule, JsonPipe],
  templateUrl: './list-courses.component.html',
  styleUrl: './list-courses.component.css'
})
export class ListCoursesComponent {

  coursesService = inject(CoursesService)

    addable: boolean = false;

    myCourse: Course = {
      title: '',
      image: '',
      price: 0,
      body: '',
      active: false
    }

    toggleForm() {
      this.addable = !this.addable
    }

    persist() {
      this.coursesService.add(this.myCourse).subscribe({
        next: (res) => {
          console.log(res)
          this.initFormCourse()
        },
        error: (err) => {}
      })

    }

    initFormCourse() {
      this.myCourse = {
        title: '',
        image: '',
        price: 0,
        body: '',
        active: false
      }
    }
}
