// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularSpotifyService} from './angular-spotify/angular-spotify.service';
import {TokenComponent} from './_helpers/token.component';
import {WindowService} from './_helpers/window.service';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
      AppComponent,
      TokenComponent
  ],
  imports: [
      CommonModule
  ],
  providers: [WindowService, AngularSpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
