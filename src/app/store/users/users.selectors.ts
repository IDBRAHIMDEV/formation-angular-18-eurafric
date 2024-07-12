import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./users.models";

export const usersSelector = createFeatureSelector<UserState>('users')

export const getAppToken = createSelector(usersSelector, (state) => state.token)
export const getUserFullName = createSelector(usersSelector, (state) => state.fullname)
export const getLoading = createSelector(usersSelector, (state) => state.loading)