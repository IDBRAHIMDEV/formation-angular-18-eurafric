import { Credential } from './users.models';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from './../../services/user.service';
import { inject } from '@angular/core';
import { LOGIN } from './users.types';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { loginFailure, loginSuccess } from './users.actions';


export class UserEffect {

    userService = inject(UserService)
    actions = inject(Actions)

     loginEffect = createEffect(() =>
        this.actions.pipe(
          ofType(LOGIN),
          exhaustMap(({credential: {username, password}}) => {
            
            return this.userService.signIn(username, password).pipe(
              map((data) => {
                return loginSuccess({ response: data });
              }),
              catchError((err) =>
                of(loginFailure({ error: err }))
              )
            );
          })
        )
      );
}