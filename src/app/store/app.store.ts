import { counterReducer } from "./counter/counter.reducer";

export const slices = {
    counterSlice: {
        name: 'counter',
        reducer: counterReducer
    }
}