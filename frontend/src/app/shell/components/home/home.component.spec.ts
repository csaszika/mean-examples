import { componentTestingSetup } from 'angular-unit-component-driver';
import { HomeComponentDriver } from './home.component.driver';
import { HomeComponent } from './home.component';

const componentSetup = (): HomeComponentDriver => {
  return componentTestingSetup({
    componentClass: HomeComponent,
    driver: HomeComponentDriver,
  });
};

describe('HomeComponent', () => {

  let driver: HomeComponentDriver;

  Given(() => {
    driver = componentSetup();
  });

  describe('Initializing', () => {
    When(() => {
      driver.detectChanges();
    });

    Then(() => {
      expect(driver.componentInstance).toBeTruthy();
      expect(driver.homeDiv.textContent).toEqual('Mean Home');
    });
  });
});
