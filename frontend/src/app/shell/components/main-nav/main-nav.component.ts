import {Component, Input} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {routeAnimations} from '../../../shared/animations/routing.animations';
import {MenuItem} from '../../types/menu-item.interface';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  animations: [routeAnimations]
})
export class MainNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  @Input() menuItems: MenuItem[];

  constructor(private breakpointObserver: BreakpointObserver) {}

  detectRoutingState(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
