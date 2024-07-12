import { createReducer, on } from "@ngrx/store";
import { initUserState } from "./users.states";
import { login, loginFailure, loginSuccess } from "./users.actions";
import { setToken } from "../app.helps";


export const userReducer = createReducer(initUserState, on(login, (state, action) => {
    console.log('first action', action)
    return {
        ...state,
        loading: true
    }
}), on(loginSuccess, (state, action) => {

    setToken(action.response.token)

    return {
        ...state,
        token: action.response.token,
        fullname: action.response.firstName + ' ' +action.response.lastName,
        loading: false
    }
}), on(loginFailure, (state, action) => {
    return {
        ...state,
        errorMessage: action.error,
        loading: false
    }
}))