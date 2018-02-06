// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SpotifyService} from './angular-spotify/angular-spotify.service';
import {TokenComponent} from './_helpers/token.component';
import {WindowService} from './_helpers/window.service';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {SpotifyInterceptorService} from './_helpers/spotify-interceptor.service';


const appRoutes: Routes = [
    { path: 'auth/token', component: TokenComponent }
];

@NgModule({
  declarations: [
      AppComponent,
      TokenComponent
  ],
  imports: [
      CommonModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule
  ],
  providers: [WindowService, SpotifyService, {
      provide: HTTP_INTERCEPTORS,
      useClass: SpotifyInterceptorService,
      multi: true
  }],
  exports: [ RouterModule ],
  bootstrap: [AppComponent]
})
export class SpotifyModule { }
