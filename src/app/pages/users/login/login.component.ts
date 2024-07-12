import { Credential } from './../../../store/users/users.models';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../../../store/users/users.actions';
import { FormsModule } from '@angular/forms';
import { getAppToken } from '../../../store/users/users.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login = 'emilys'
  password = 'emilyspass'

 
  store = inject(Store)
  router = inject(Router)

  loginWithUsernameAndPass() {

    let credential: Credential = {
      username: this.login,
      password: this.password
    }

    console.log('credential', credential)
    this.store.dispatch(login({credential}))

    this.store.select(getAppToken).subscribe({
      next: (res) => {
        console.log(res)
        this.router.navigate(['store/elearning/list'])
      }
    })
  }
}
