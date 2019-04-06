import { async, TestBed } from '@angular/core/testing';

import { MenuItemService } from './menu-item.service';
import { HttpClient } from '@angular/common/http';
import { createSpyFromClass } from 'jasmine-auto-spies';
import { MenuItem } from '../types/menu-item.interface';

describe('MenuItemService', () => {
  const mockHttp = createSpyFromClass(HttpClient, [], ['get']);

  let service: MenuItemService;

  Given(async(() => TestBed.configureTestingModule({
    providers: [MenuItemService, {
      provide: HttpClient,
      useValue: mockHttp
    }],
  })));

  Given(() => {
    service = TestBed.get(MenuItemService);
  });

  Then('should be created', () => {
    expect(service).toBeTruthy();
  });

  Then('should call GET menu items', () => {
    service.getMenuItems().subscribe((items: MenuItem[]) => {
      expect(mockHttp.get).toHaveBeenCalledWith('http://localhost:3000/menu-items');
    });
  });
});
