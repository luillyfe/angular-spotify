import { Injectable } from '@angular/core';
import {WindowService} from '../_helpers/window.service';

@Injectable()
export class AngularSpotifyService {
    private clientId:     string = '14d0e6301dea4e29ba4ba48195d3a255';
    private responseType: string = 'token';
    private redirectUri:  string = 'http://localhost:4200/auth/token'; // shoul be register on

  constructor(private windowRef: WindowService) { }

  getToken(windowName: string, windowOptions: string) {
      this.windowRef.nativeWindow.open(`https://accounts.spotify.com/authorize?${this.toQueryString()}`,
        windowName, windowOptions);
  }

  private toQueryString(): string {
      return `client_id=${this.clientId}&response_type=${this.responseType}&redirect_uri=${this.redirectUri}`;
  }

}
