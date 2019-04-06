import { async, TestBed } from '@angular/core/testing';
import { MenuItemService } from '../services/menu-item.service';
import { MenuItemResolver } from './menu-item.resolver';
import { createSpyFromClass } from 'jasmine-auto-spies';
import { mockMenuItems } from '../test/menu-items.mock';
import { MenuItem } from '../types/menu-item.interface';

describe('MenuItemResolver', () => {

  const mockService = createSpyFromClass(MenuItemService, [], ['getMenuItems']);
  let resolver: MenuItemResolver;

  Given(async(() => TestBed.configureTestingModule({
    providers: [MenuItemResolver, {
      provide: MenuItemService,
      useValue: mockService
    }],
  })));

  Given(() => {
    resolver = TestBed.get(MenuItemResolver);
  });

  Then(() => {
    mockService.getMenuItems.and.nextOneTimeWith(mockMenuItems());
    resolver.resolve().subscribe((items: MenuItem[]) => {
      expect(mockService.getMenuItems).toHaveBeenCalledWith();
      expect(items).toEqual(mockMenuItems());
    });
  });
});
