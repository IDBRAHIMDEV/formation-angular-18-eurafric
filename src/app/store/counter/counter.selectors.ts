import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.model";

export const counterSelector = createFeatureSelector<CounterState>('counter')

export const getCount = createSelector(counterSelector, (state) => state.count)