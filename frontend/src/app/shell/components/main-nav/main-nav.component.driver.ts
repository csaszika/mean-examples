import { ComponentDriver } from 'angular-unit-component-driver';
import { MainNavComponent } from './main-nav.component';

export class MainNavComponentDriver extends ComponentDriver<MainNavComponent> {

  get navItems(): HTMLElement[] {
    return this.querySelectorAll('mat-nav-list > a');
  }
}
