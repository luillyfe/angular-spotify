import { Component, OnInit } from '@angular/core';
import {AngularSpotifyService} from './angular-spotify.service';

@Component({
  selector: 'app-angular-spotify',
  templateUrl: './angular-spotify.component.html',
  styleUrls: ['./angular-spotify.component.css']
})
export class AngularSpotifyComponent implements OnInit {
    private witdh: number = 400;
    private heigh: number = 500;
    private left:  number = (screen.width / 2) - (this.witdh / 2);
    private top:   number = (screen.height / 2) - (this.heigh / 2);

    private name: string = 'Spotify Auth';

    constructor(private spotify: AngularSpotifyService) { }

    ngOnInit() { }

    private auth() {
        this.spotify.getToken(this.name, this.getOptions());
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
