import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  standalone: true,
  imports: [],
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})
export class EditCourseComponent  {
  route = inject(ActivatedRoute)

  ngOnInit(): void {
    this.route.params.subscribe({
      next: params => {
        console.log(params)
      },
      error: err => console.log(err)
    })
  }
}
