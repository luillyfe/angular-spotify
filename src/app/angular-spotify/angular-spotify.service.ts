import { Injectable } from '@angular/core';
import {WindowService} from '../_helpers/window.service';
import {SpotifyConfig} from './spotify-config';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class SpotifyService {

    private apiBase = 'https://api.spotify.com/v1';
    private config = new SpotifyConfig();

    constructor(private windowRef: WindowService,
                private http: HttpClient) {
        this.getToken();
    }

    getAlbum() {
      const album = '0sNOF9WDwhWunNAHPD3Baj';
      return this.api('/albums/' + album, 'GET', null, null)
          .subscribe(data => console.log(data), res => console.log(res));
    }

    private getToken(windowName = this.config.name, windowOptions = this.config.getOptions()) {
        this.windowRef.nativeWindow.open(`https://accounts.spotify.com/authorize?${this.config.toQueryString()}`,
          windowName, windowOptions);
    }

    private api(endpoint, method, params, data) {
        return this.http.get(`${this.apiBase}${endpoint}`);
    }
}
