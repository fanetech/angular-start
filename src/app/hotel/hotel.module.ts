import { NgModule } from '@angular/core';
import { HotelDetailComponent } from './hotel-detail/hotel-detail/hotel-detail.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HotelRoutingModule } from './hotel-routing.module';
import { HotelEditComponent } from '../hotel-edit/hotel-edit.component';



@NgModule({
  declarations: [
    HotelDetailComponent,
    HotelListComponent,
    HotelEditComponent
    
  ],
  imports: [    
    HotelRoutingModule,
    SharedModule
  ]
})
export class HotelModule { }
