import {NgModule} from '@angular/core';
import {MainNavComponent} from "./components/main-nav/main-nav.component";
import {HomeComponent} from "./components/home/home.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ShellComponent} from "./shell/shell.component";
import {CommonModule} from "@angular/common";
import {MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule} from '@angular/material';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    HttpClientModule
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
