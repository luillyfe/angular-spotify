import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WindowService} from './window.service';

@Component({
  template: ''
})
export class TokenComponent {
  constructor(private route: ActivatedRoute, private windowRef: WindowService) {
      this.windowRef.nativeWindow.close();
      this.route.fragment
          .subscribe((token: string) => {
              localStorage.setItem('token', token.slice(token.indexOf('=') + 1, token.indexOf('&')));
          });
  }
}
