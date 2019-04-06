import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MenuItem} from '../types/menu-item.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  constructor(private readonly http: HttpClient) { }

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>('http://localhost:3000/menu-items');
  }
}
