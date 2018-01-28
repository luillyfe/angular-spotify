import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WindowService} from './window.service';

@Component({
  selector: 'app-root',
  template: ''
})
export class TokenComponent {
  constructor(private route: ActivatedRoute, private windowRef: WindowService) {
      this.route.fragment
          .subscribe((token: string) => {
              localStorage.setItem('token', token.slice(token.indexOf('=') + 1, token.indexOf('&')));
          });
      this.windowRef.nativeWindow.close();
  }
}
