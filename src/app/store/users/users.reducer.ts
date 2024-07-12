import { createReducer, on } from "@ngrx/store";
import { initUserState } from "./users.states";
import { login, loginFailure, loginSuccess } from "./users.actions";


export const userReducer = createReducer(initUserState, on(login, (state) => {
    return {
        ...state,
        loading: true
    }
}), on(loginSuccess, (state, action) => {
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