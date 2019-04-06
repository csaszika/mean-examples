import { componentTestingSetup } from 'angular-unit-component-driver';
import { MainNavComponentDriver } from './main-nav.component.driver';
import { MainNavComponent } from './main-nav.component';
import { mockMenuItems } from '../../test/menu-items.mock';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from '../home/home.component';

const animationKey1 = 'animationKey1';
const animationKey2 = 'animationKey2';

const componentSetup = (): MainNavComponentDriver => {
  return componentTestingSetup({
    componentClass: MainNavComponent,
    driver: MainNavComponentDriver,
    imports: [RouterTestingModule.withRoutes([
      {
        component: HomeComponent,
        path: mockMenuItems()[0].url.substring(1), // for remove slash
        data: { animation: animationKey1 }
      }, {
        component: HomeComponent,
        path: mockMenuItems()[1].url.substring(1),
        data: { animation: animationKey2 }
      }
      ]), NoopAnimationsModule],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
};

describe('MainNavComponent', () => {

  let driver: MainNavComponentDriver;

  Given(() => {
    driver = componentSetup();
  });

  describe('Initializing', () => {
    Given(() => {
      driver.componentInstance.menuItems = mockMenuItems();
    });

    When(() => {
      driver.detectChanges();
    });

    Then(() => {
      expect(driver.componentInstance).toBeTruthy();
      expect(driver.componentInstance.menuItems).toEqual(mockMenuItems());
      driver.navItems.forEach((item: HTMLAnchorElement, index: number) => {
        expect(item.href).toEqual(location.origin + mockMenuItems()[index].url);
        expect(item.textContent).toEqual(mockMenuItems()[index].name);
      });
    });
  });

  describe('Public methods', () => {
      describe('#detectRoutingState', () => {
        let result = '';
        const outlet = { activatedRouteData: { animation: animationKey2 } };

        When(() => {
          driver.detectChanges();
          result = driver.componentInstance.detectRoutingState(outlet);
        });

        Then(() => {
          expect(result).toEqual(animationKey2);
        });
      });
  });
});
