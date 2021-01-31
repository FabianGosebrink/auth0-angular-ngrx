import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthEffects } from './store/auth.effects';
import { authReducer } from './store/auth.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
    AuthModule.forRoot({
      domain: '<your domain>',
      clientId: '<your client id>',
      redirectUri: window.location.origin,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
