import { ShellComponent } from './shell.component';
import { componentTestingSetup } from 'angular-unit-component-driver';
import { ShellComponentDriver } from './shell.component.driver';
import { ActivatedRoute } from '@angular/router';
import { mockActivatedRouteWithMenuItems } from './test/activated-route.mock';
import { MockComponent } from 'ng-mocks';
import { MainNavComponent } from './components/main-nav/main-nav.component';

const componentSetup = (): ShellComponentDriver => {
  return componentTestingSetup({
    componentClass: ShellComponent,
    driver: ShellComponentDriver,
    providers: [{
      provide: ActivatedRoute,
      useValue: mockActivatedRouteWithMenuItems()
    }],
    declarations: [MockComponent(MainNavComponent)]
  });
};

describe('ShellComponent', () => {

  let driver: ShellComponentDriver;

  Given(() => {
    driver = componentSetup();
  });

  describe('Initializing', () => {
    When(() => {
      driver.detectChanges();
    });

    Then(() => {
      expect(driver.componentInstance.menuItems).toEqual(mockActivatedRouteWithMenuItems().snapshot.data.menuItems);
      expect(driver.mainNav.menuItems).toEqual(mockActivatedRouteWithMenuItems().snapshot.data.menuItems);
    });
  });
});
