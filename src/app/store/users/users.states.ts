import { UserState } from "./users.models";


export const initUserState: UserState = {
    userId: 0,
    users: [],
    token: '',
    login: '',
    loading: false,
    fullname: '',
    errorMessage: ''
}