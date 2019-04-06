import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MenuItem} from '../types/menu-item.interface';
import { AsyncSpyable } from 'jasmine-auto-spies';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  constructor(private readonly http: HttpClient) { }

  @AsyncSpyable()
  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>('http://localhost:3000/menu-items');
  }
}
