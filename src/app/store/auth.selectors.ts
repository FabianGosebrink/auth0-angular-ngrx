import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const selectCurrentUserProfile = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.userProfile
);

export const selectIsLoggedIn = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.isLoggedIn
);
