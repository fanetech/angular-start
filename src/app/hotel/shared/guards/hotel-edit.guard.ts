import { Injectable } from '@angular/core';
import {  CanDeactivate } from '@angular/router';

import { HotelEditComponent } from 'src/app/hotel-edit/hotel-edit.component';

@Injectable({
  providedIn: 'root'
})
export class HotelEditGuard implements CanDeactivate<HotelEditComponent> {
  canDeactivate(
    component: HotelEditComponent): boolean{
      if(component.hotelForm.dirty){
        const hotelName =   component.hotelForm.get('hotelName')?.value || 'Nouveau hotel'
        return confirm(`Voulez vous annuler les changements effectue sur ${hotelName}`)
      }
    return true;
  }
  
}
