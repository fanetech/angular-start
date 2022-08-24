import { HotelListComponent } from './hotel-list/hotel-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'
import { ReplaceComma } from './shared/replace-comma-pipe';

registerLocaleData(localeFr, "fr")
@NgModule({
  declarations: [AppComponent, HotelListComponent, ReplaceComma],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
