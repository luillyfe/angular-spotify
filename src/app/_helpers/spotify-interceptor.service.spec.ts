import { TestBed, inject } from '@angular/core/testing';

import { SpotifyInterceptorService } from './spotify-interceptor.service';

describe('SpotifyInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyInterceptorService]
    });
  });

  it('should be created', inject([SpotifyInterceptorService], (service: SpotifyInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
