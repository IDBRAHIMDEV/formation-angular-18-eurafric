import { Userv2 } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { map, Observable } from 'rxjs';
import { pick } from 'lodash'

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  // constructor(private http: HttpClient) { }
  http = inject(HttpClient)
  urlApi = 'https://api.github.com/users'

  getUsers(): Observable<Userv2[]> {
    return this.http.get<User[]>(this.urlApi).pipe(map((users) => users.map(user => pick(user, ['id', 'avatar_url', 'login'])
    )))
  }
}
