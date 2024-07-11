import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CoursesService } from '../../../services/courses.service';
import { Course } from '../../../models/course';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { omit } from 'lodash';

@Component({
  selector: 'app-edit-course',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})
export class EditCourseComponent  {
  route = inject(ActivatedRoute)
  coursesService = inject(CoursesService)
  router = inject(Router)

  currentId: number = 0

  courseForm!: FormGroup

  constructor() {
    this.courseForm = new FormGroup({
      title: new FormControl('my title', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      image: new FormControl('', [Validators.required]),
      price: new FormControl(0),
      body: new FormControl('')
    }, {updateOn: 'blur'})
  }

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
        
        this.currentId = id

        this.coursesService.one(id).subscribe({
          next: res => {
            this.courseForm.patchValue(res)
          }
        })

      },
      error: err => console.log(err)
    })
  }

  update() {
    
    if(this.courseForm.invalid) {
      console.log('invalid')
      return;
    }

    console.log('valid')


    if(this.currentId) {
      this.coursesService.modify(this.courseForm.value, this.currentId).subscribe({
        next: res => {
          this.router.navigate(['/store/elearning', 'list'])
        },
        error: err => {
          console.log(err)
        }
      })
    }
  }

  get title() {
    return this.courseForm.get('title')
  }

  get image() {
    return this.courseForm.get('image')
  }
}
