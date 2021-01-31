import { createAction, props } from '@ngrx/store';

export const checkAuth = createAction('[Auth] checkAuth');
export const login = createAction('[Auth] login');
export const checkAuthComplete = createAction(
  '[Auth] checkAuthComplete',
  props<{ isAuth: boolean }>()
);
export const loginComplete = createAction(
  '[Auth] loginComplete',
  props<{ profile: any; isLoggedIn: boolean }>()
);

export const logout = createAction('[Auth] logout');
export const logoutComplete = createAction('[Auth] logoutComplete');
