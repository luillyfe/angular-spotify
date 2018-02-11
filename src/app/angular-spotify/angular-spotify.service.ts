import { Injectable } from '@angular/core';
import {WindowService} from '../_helpers/window.service';
import {SpotifyConfig} from './spotify-config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SpotifyService {

    private apiBase = 'https://api.spotify.com/v1';
    private config = new SpotifyConfig();

    constructor(private windowRef: WindowService,
                private http: HttpClient) {
        this.getToken();
    }

    getAlbum(albumId: string, market = 'CO'): Observable<any> {
      return this.api(`/albums/${albumId}?market=${market}`);
    }

    private getToken(windowName = this.config.name, windowOptions = this.config.getOptions()) {
        this.windowRef.nativeWindow.open(`https://accounts.spotify.com/authorize?${this.config.toQueryString()}`,
          windowName, windowOptions);
    }

    private api(endpoint) {
        return this.http.get(`${this.apiBase}${endpoint}`);
    }
}
