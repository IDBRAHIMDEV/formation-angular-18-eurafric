import { createAction } from "@ngrx/store";
import { COUNTER_DECEREMENT, COUNTER_INCEREMENT, COUNTER_RESET } from "./counter.types";


export const increment = createAction(COUNTER_INCEREMENT)
export const decrement = createAction(COUNTER_DECEREMENT)
export const reset = createAction(COUNTER_RESET)