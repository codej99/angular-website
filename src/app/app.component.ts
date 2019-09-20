import { Component } from '@angular/core';
import { SignService } from './service/rest-api/sign.service';
import { LoadingSpinnerService } from './service/loading-spinner/loading-spinner.service';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private signService: SignService,
    private router: Router,
    private loadingSpinnerService: LoadingSpinnerService
  ) {
    router.events.subscribe((event: RouterEvent) => {
      //this.updateLoadingBar(event);
    });
  }

  private updateLoadingBar(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      console.log("NavigationStart");
      this.loadingSpinnerService.show("잠시만 기다려 주십시요...");
    }
    if (event instanceof NavigationEnd
      || event instanceof NavigationCancel
      || event instanceof NavigationError) {
        console.log("NavigationEnd");
      //this.loadingSpinnerService.hide();
    }
  }
}
