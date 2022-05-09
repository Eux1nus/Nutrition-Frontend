import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'NutritionWEB';

  // constructor(private routerService: Router, activatedRoute: ActivatedRoute) {
  //   routerService.events.subscribe(() => {
  //     this.headerVision = !this.hasNoHeaderFlag(activatedRoute.snapshot);
  //   });
  // }

  public headerVision: boolean = false;

  public hasNoHeaderFlag(route: ActivatedRouteSnapshot): boolean {
    if (route.data && route.data.noHeader) {
      return true;
    }

    if (route.firstChild) {
      return this.hasNoHeaderFlag(route);
    }

    return false;
  }

  ngOnInit() {}
}
