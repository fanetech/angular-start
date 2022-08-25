import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'
import { ReplaceComma } from './shared/replace-comma-pipe';
import { startRatingComponent } from './shared/components/start-rating/star-rating.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { HotelDetailComponent } from './hotel/hotel-detail/hotel-detail/hotel-detail.component'
import { RouterModule } from '@angular/router';
import { HotelDetailGuard } from './hotel/shared/guards/hotel-detail.guard';
import { HotelModule } from './hotel/hotel.module';
import { AppRoutingModule } from './app-routing.module';
registerLocaleData(localeFr, "fr")
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
     FormsModule, 
     HttpClientModule,
     HotelModule,
     AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
