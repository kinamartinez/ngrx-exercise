import {createSelector} from '@ngrx/store';

export const selecAuthState = state =>  state.auth;
export const isLoggedIn = createSelector(
  selecAuthState,
  auth => auth.loggedIn
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
