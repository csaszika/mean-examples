import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from './types/menu-item.interface';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

  menuItems: MenuItem[];

  constructor(private readonly route: ActivatedRoute) {
    this.menuItems = route.snapshot.data['menuItems'];
  }

}
