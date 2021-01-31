import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, featureName } from './auth.reducer';

export const getAuthFeatureState = createFeatureSelector<AuthState>(
  featureName
);

export const selectCurrentUserProfile = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.userProfile
);

export const selectIsLoggedIn = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.isLoggedIn
);

export const selectCurrentUserPicture = createSelector(
  selectCurrentUserProfile,
  (state: any) => state.picture
);
