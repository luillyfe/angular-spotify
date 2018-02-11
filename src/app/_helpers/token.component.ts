import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WindowService} from './window.service';

import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/do';

@Component({
  template: ''
})
export class TokenComponent implements OnDestroy {
  private tokenSubscription: Subscription;

  constructor(private route: ActivatedRoute, private windowRef: WindowService) {
      this.windowRef.nativeWindow.close();
      this.tokenSubscription = this.route.fragment
          .do(token => console.log(`token: ${token}`))
          .subscribe((token: string) => {
              localStorage.setItem('token', token.slice(token.indexOf('=') + 1, token.indexOf('&')));
          });
  }

  ngOnDestroy() {
      this.tokenSubscription.unsubscribe();
  }
}
