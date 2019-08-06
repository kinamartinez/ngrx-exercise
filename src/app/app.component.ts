import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from './reducers';
import {Logout} from './auth/auth.actions';
import {map} from 'rxjs/operators';
import {isLoggedOut, isLoggedIn} from './auth/auth.selectors';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn$: Observable<any>;
  isLoggedOut$: Observable<any>;

  constructor(private store: Store<AppState>, private router: Router) {

  }

  ngOnInit() {
    this.isLoggedIn$ = this.store
      .pipe(
        // map(state => state.auth.loggedIn) ----- es mejor hacerlo usando selector
        select(isLoggedIn)

      );
    this.isLoggedOut$ = this.store
      .pipe(
        // map(state => !state.auth.loggedIn)
        select(isLoggedOut)
      );
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
