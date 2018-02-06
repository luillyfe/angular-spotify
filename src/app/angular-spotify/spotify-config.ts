export class SpotifyConfig {
    clientId = '14d0e6301dea4e29ba4ba48195d3a255';
    responseType = 'token';
    redirectUri = 'http://localhost:4200/auth/token'; // should be register on

    name = 'Spotify Auth';

    witdh: number = 400;
    heigh: number = 500;
    left:  number = (screen.width / 2) - (this.witdh / 2);
    top:   number = (screen.height / 2) - (this.heigh / 2);

    getOptions(): string {
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

    toQueryString(): string {
      return `client_id=${this.clientId}&response_type=${this.responseType}&redirect_uri=${this.redirectUri}`;
    }
}
