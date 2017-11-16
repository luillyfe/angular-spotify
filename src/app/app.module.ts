import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularSpotifyService} from './angular-spotify/angular-spotify.service';
import {RouterModule, Routes} from '@angular/router';
import { AngularSpotifyComponent } from './angular-spotify/angular-spotify.component';
import {TokenComponent} from './_helpers/token.component';
import {WindowService} from './_helpers/window.service';

const appRoutes: Routes = [
    { path: '', component: AngularSpotifyComponent },
    { path: 'auth/token', component:  TokenComponent}
];

@NgModule({
  declarations: [
      AppComponent,
      AngularSpotifyComponent,
      TokenComponent
  ],
  imports: [
      RouterModule.forRoot(appRoutes),
      BrowserModule,
      HttpClientModule
  ],
  providers: [WindowService, AngularSpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
