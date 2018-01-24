import { TestBed, inject } from '@angular/core/testing';

import { AngularSpotifyService } from './angular-spotify.service';
import {WindowService} from '../_helpers/window.service';

describe('AngularSpotifyService', () => {
    let WindowServiceStub = {
        nativeWindow: {
            open: () => null
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AngularSpotifyService,
                {
                    provide: WindowService,
                    useValue: WindowServiceStub
                }
            ]
        });
    });

    it('should be created', inject([AngularSpotifyService], (service: AngularSpotifyService) => {
        expect(service).toBeTruthy();
    }));
});
