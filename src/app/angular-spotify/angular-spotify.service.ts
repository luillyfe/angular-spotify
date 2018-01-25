import { Injectable } from '@angular/core';
import {WindowService} from '../_helpers/window.service';

@Injectable()
export class AngularSpotifyService {
    private clientId = '14d0e6301dea4e29ba4ba48195d3a255';
    private responseType = 'token';
    private redirectUri = 'http://localhost:4200/auth/token'; // should be register on

    private name = 'Spotify Auth';

    private witdh: number = 400;
    private heigh: number = 500;
    private left:  number = (screen.width / 2) - (this.witdh / 2);
    private top:   number = (screen.height / 2) - (this.heigh / 2);

    constructor(private windowRef: WindowService) { }

    getToken(windowName = this.name, windowOptions = this.getOptions()) {
        this.windowRef.nativeWindow.open(`https://accounts.spotify.com/authorize?${this.toQueryString()}`,
          windowName, windowOptions);
    }

    private toQueryString(): string {
        return `client_id=${this.clientId}&response_type=${this.responseType}&redirect_uri=${this.redirectUri}`;
    }

    private getOptions(): string {
      return `menubar=no,
              location=no,
              resizable=yes,
              scrollbars=yes,
              status=no,
              width=${this.witdh},
              height=${this.heigh},
              top=${this.top},
              left=${this.left}`;
    }

}
