import { counterReducer } from "./counter/counter.reducer";
import { userReducer } from "./users/users.reducer";

export const slices = {
    counterSlice: {
        name: 'counter',
        reducer: counterReducer
    },
    UserSlice: {
        name:'users',
        reducer: userReducer
    }
}