import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {routerTransition} from "../../shared/animations/routing.animations";

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  animations: [routerTransition]
})
export class MainNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(private breakpointObserver: BreakpointObserver,
              private route: ActivatedRoute) {}

  detectRoutingState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
