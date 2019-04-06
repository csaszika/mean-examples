import { componentTestingSetup } from 'angular-unit-component-driver';
import { PageNotFoundComponentDriver } from './page-not-found.component.driver';
import { PageNotFoundComponent } from './page-not-found.component';

const componentSetup = (): PageNotFoundComponentDriver => {
  return componentTestingSetup({
    componentClass: PageNotFoundComponent,
    driver: PageNotFoundComponentDriver,
  });
};

describe('PageNotFoundComponent', () => {

  let driver: PageNotFoundComponentDriver;

  Given(() => {
    driver = componentSetup();
  });

  describe('Initializing', () => {
    When(() => {
      driver.detectChanges();
    });

    Then(() => {
      expect(driver.componentInstance).toBeTruthy();
      expect(driver.pageNotFoundElement.textContent).toEqual('Page Not Found 404');
    });
  });
});
