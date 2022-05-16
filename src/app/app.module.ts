import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { LogoComponent } from './logo/logo.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IdLogoComponent } from './id-logo/id-logo.component';
import { DrinkButtonComponent } from './drink-button/drink-button.component';
import { InfoButtonComponent } from './info-button/info-button.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HeroContentComponent } from './hero-content/hero-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavLinksComponent,
    NavBarComponent,
    IdLogoComponent,
    DrinkButtonComponent,
    InfoButtonComponent,
    MainContentComponent,
    HeroContentComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
