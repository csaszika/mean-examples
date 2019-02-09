import {NgModule} from '@angular/core';
import {MainNavComponent} from "./main-nav/main-nav.component";
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ShellComponent} from "./shell/shell.component";
import {CommonModule} from "@angular/common";
import {MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule} from '@angular/material';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [
    MainNavComponent,
    HomeComponent,
    PageNotFoundComponent,
    ShellComponent
  ],
})
export class CoreModule {
}
