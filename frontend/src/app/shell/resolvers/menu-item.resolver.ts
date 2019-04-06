import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {MenuItem} from '../types/menu-item.interface';
import {MenuItemService} from '../services/menu-item.service';

@Injectable({
  providedIn: 'root'
})
export class MenuItemResolver implements Resolve<MenuItem[]> {

  constructor(private readonly service: MenuItemService) {}

  resolve(): Observable<MenuItem[]> {
    return this.service.getMenuItems();
  }
}
