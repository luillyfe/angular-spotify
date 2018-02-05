import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSpotifyComponent } from './angular-spotify.component';

describe('AngularSpotifyComponent', () => {
  let component: AngularSpotifyComponent;
  let fixture: ComponentFixture<AngularSpotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSpotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSpotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
