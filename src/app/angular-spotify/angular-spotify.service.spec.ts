import {TestBed, inject, async} from '@angular/core/testing';

import { SpotifyService } from './angular-spotify.service';
import {WindowService} from '../_helpers/window.service';
import {HttpClient} from '@angular/common/http';


describe('AngularSpotifyService', () => {
    const windowServiceStub = {
        nativeWindow: {
            open() {}
        }
    };
    const httpStub = {
        get() {}
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                SpotifyService,
                {
                    provide: HttpClient,
                    useValue: httpStub
                },
                {
                    provide: WindowService,
                    useValue: windowServiceStub
                }
            ]
        });
    });

    it('should get created', inject([SpotifyService, WindowService, HttpClient],
      (spotify: SpotifyService, windowRef: WindowService, http: HttpClient) => {
          expect(spotify).toBeTruthy();
          expect(windowRef).toBeTruthy();
          expect(http).toBeTruthy();
    }));

    it('should get album by id', inject([SpotifyService],
      (spotify: SpotifyService) => {
          const albumId = '382ObEPsp2rxGrnsizN5TX', market = 'CO';
          spyOn<any>(spotify, 'api');

          spotify.getAlbum(albumId, market);

          expect(spotify['api']).toHaveBeenCalledWith('/albums/382ObEPsp2rxGrnsizN5TX?market=CO');
    }));

    it('should make an http request using the apiBaseUrl', async(inject([SpotifyService, HttpClient],
    (spotify: SpotifyService, http: HttpClient) => {
        const endpoint = '/albums/382ObEPsp2rxGrnsizN5TX?market=CO';
        spyOn<any>(http, 'get');

        spotify['api'](endpoint);

        expect(http.get).toHaveBeenCalledWith('https://api.spotify.com/v1/albums/382ObEPsp2rxGrnsizN5TX?market=CO');
    })));
});
