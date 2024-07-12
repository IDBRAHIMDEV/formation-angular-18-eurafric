import { createReducer, on } from "@ngrx/store";
import { initCounterState } from "./counter.state";
import { decrement, increment, reset } from "./counter.actions";


export const counterReducer = createReducer(initCounterState, on(increment, (state) => {
    return {
        ...state,
        count: state.count + 1
    }
}), on(decrement, (state) => {
    return {
        ...state,
        count: state.count - 1 
    }
}), on(reset, (state) => {
    return {
        ...state,
        count: 0
    }
}))