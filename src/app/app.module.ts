import { HotelListComponent } from './hotel-list/hotel-list.component';
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
import { HotelDetailComponent } from './hotel-list/hotel-detail/hotel-detail.component'
import { RouterModule } from '@angular/router';
import { HotelDetailGuard } from './hotel-list/hotel-detail.guard';
registerLocaleData(localeFr, "fr")
@NgModule({
  declarations: [AppComponent, HotelListComponent, ReplaceComma, startRatingComponent, HomeComponent, HotelDetailComponent],
  imports: [
    BrowserModule,
     FormsModule, 
     HttpClientModule,
     RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'', redirectTo: 'home', pathMatch:'full'},
      {
        path:'hotels/:id', component: HotelDetailComponent,
        canActivate: [HotelDetailGuard]
    },
      {path:'hotels', component: HotelListComponent},
      {path:'**', redirectTo:'home', pathMatch:'full'}
     ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
