import { createAction, props } from "@ngrx/store";
import { ADD_USER, DELETE_USER, LOAD_ALL_USERS, LOAD_ONE_USER, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, UPDATE_USER } from "./users.types";
import { Credential, LoginResponse } from "./users.models";

export const loadAllUsers = createAction(LOAD_ALL_USERS)
export const loadOneUser = createAction(LOAD_ONE_USER)
export const addUser = createAction(ADD_USER)
export const updateUser = createAction(UPDATE_USER)
export const deleteUser = createAction(DELETE_USER)

export const login = createAction(LOGIN, props<{credential: Credential}>())
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{response: LoginResponse}>())
export const loginFailure = createAction(LOGIN_FAILURE, props<{error: 'Login and passwrd went wrong !'}>())

export const logout = createAction(LOGOUT)