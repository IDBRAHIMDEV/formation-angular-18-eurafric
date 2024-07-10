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

  list: boolean = true

    addable: boolean = false;
    courses: Course[] = []

    myCourse: Course = {
      title: '',
      image: '',
      price: 0,
      body: '',
      active: false
    }

    ngOnInit(): void {
      this.getAll()
    }

    getAll() {
      this.coursesService.all().subscribe({
        next: (res) => {
          this.courses = res
        },
        error: (err) => {
          console.log(err)
        }
      })
    }

    toggleForm() {
      this.addable = !this.addable
    }

    persist() {
      this.coursesService.add(this.myCourse).subscribe({
        next: (res) => {
          
          this.courses = [res, ...this.courses]

          this.initFormCourse()
        },
        error: (err) => {}
      })

    }

    initFormCourse() {
      this.addable = false
      this.myCourse = {
        title: '',
        image: '',
        price: 0,
        body: '',
        active: false
      }
    }

    toogleDisplayOption(status: boolean) {
      this.list = status
    }
}
