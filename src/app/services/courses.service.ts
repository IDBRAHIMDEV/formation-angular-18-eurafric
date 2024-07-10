import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Course } from '../models/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  apiUrl = `${environment.apiUrl}/courses`
  http = inject(HttpClient)

  all(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl)
  }

  add(data: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, data)
  }

  one(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`)
  }

  modify(data: Course, id: number): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, data)
  }

  destroy(id: number): Observable<null> {
    return this.http.delete<null>(`${this.apiUrl}/${id}`)
  } 
}
