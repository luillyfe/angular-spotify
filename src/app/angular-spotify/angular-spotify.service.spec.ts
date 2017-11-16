import { TestBed, inject } from '@angular/core/testing';

import { AngularSpotifyService } from './angular-spotify.service';

describe('AngularSpotifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularSpotifyService]
    });
  });

  it('should be created', inject([AngularSpotifyService], (service: AngularSpotifyService) => {
    expect(service).toBeTruthy();
  }));
});
