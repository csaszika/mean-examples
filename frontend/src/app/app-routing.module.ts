import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './core/components/home/home.component';
import {ShellComponent} from './core/shell/shell.component';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';
import {MenuItemResolver} from './core/resolvers/menu-item.resolver';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    resolve: {
      menuItems: MenuItemResolver
    },
    children: [
      { path: 'home', component: HomeComponent, data: { animation: 'home' } },
      { path: 'dogs', component: HomeComponent, data: { animation: 'dogs' } },
      { path: '', pathMatch: 'full', redirectTo: 'home' }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
