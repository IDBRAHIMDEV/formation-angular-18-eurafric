import { Credential } from './../../../store/users/users.models';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../../../store/users/users.actions';
import { FormsModule } from '@angular/forms';

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

  loginWithUsernameAndPass() {

    let credential: Credential = {
      username: this.login,
      password: this.password
    }

    console.log('credential', credential)
    this.store.dispatch(login({credential}))
  }
}
