import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularSpotifyService} from './angular-spotify/angular-spotify.service';
import {TokenComponent} from './_helpers/token.component';
import {WindowService} from './_helpers/window.service';
import {RouterModule, Routes} from '@angular/router';
import { AngularSpotifyComponent } from './angular-spotify/angular-spotify.component';
// import {CommonModule} from '@angular/common';


const appRoutes: Routes = [
    { path: 'auth/token', component: TokenComponent }
];

@NgModule({
  declarations: [
      AppComponent,
      TokenComponent,
      AngularSpotifyComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [WindowService, AngularSpotifyService],
  exports: [ RouterModule ],
  bootstrap: [AppComponent]
})
export class SpotifyModule { }
