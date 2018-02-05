import { Component, OnInit } from '@angular/core';
import {AngularSpotifyService} from './angular-spotify.service';

@Component({
  selector: 'spotify-outlet',
  template: '<router-outlet></router-outlet>',
  styles: []
})
export class AngularSpotifyComponent implements OnInit {

  constructor(private spotify: AngularSpotifyService) { }

  ngOnInit() {
      this.spotify.getToken();
  }

}
