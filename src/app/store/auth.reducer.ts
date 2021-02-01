import { Action, createReducer, on } from '@ngrx/store';
import * as authActions from './auth.actions';

export const featureName = 'auth';

export interface AuthState {
  userProfile: any;
  isLoggedIn: boolean;
}

export const initialState: AuthState = {
  userProfile: null,
  isLoggedIn: false,
};

const authReducerInternal = createReducer(
  initialState,

  on(authActions.loginComplete, (state, { profile, isLoggedIn }) => {
    return {
      ...state,
      userProfile: profile,
      isLoggedIn,
    };
  }),

  on(authActions.logoutComplete, (state, {}) => {
    return {
      ...state,
      userProfile: null,
      isLoggedIn: false,
    };
  })
);

export function authReducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return authReducerInternal(state, action);
}
