import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { combineLatest, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { AuthenticationService } from '../auth.service';
import * as fromAuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService
  ) {}

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.login),
        tap(() => this.authService.login())
      ),
    { dispatch: false }
  );

  checkAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAuthActions.checkAuth),
      switchMap(() =>
        combineLatest([this.authService.isLoggedIn$, this.authService.user$])
      ),
      switchMap(([isLoggedIn, profile]) => {
        if (isLoggedIn) {
          return of(fromAuthActions.loginComplete({ profile, isLoggedIn }));
        }

        return of(fromAuthActions.logoutComplete());
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAuthActions.logout),
      map(() => this.authService.logout()),
      switchMap(() => of(fromAuthActions.logoutComplete()))
    )
  );
}
