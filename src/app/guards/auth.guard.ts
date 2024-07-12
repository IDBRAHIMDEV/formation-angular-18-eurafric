import { getToken } from './../store/app.helps';
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAppToken } from '../store/users/users.selectors';

export const authGuard: CanActivateFn = (route, state) => {

  const token = getToken()

  return !!token
};
