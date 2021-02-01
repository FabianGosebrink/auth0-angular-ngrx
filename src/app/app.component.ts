import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { checkAuth, login, logout } from './store/auth.actions';
import {
  selectCurrentUserProfile,
  selectIsLoggedIn
} from './store/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'auth0-angular-ngrx';

  loggedIn$: Observable<boolean>;
  profile$: Observable<any>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.loggedIn$ = this.store.pipe(select(selectIsLoggedIn));
    this.profile$ = this.store.pipe(select(selectCurrentUserProfile));

    this.store.dispatch(checkAuth());
  }

  logout() {
    this.store.dispatch(logout());
  }

  login() {
    this.store.dispatch(login());
  }
}
