import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IHotel } from '../hotel/shared/models/hotel';
import { HotelListService } from '../hotel/shared/services/hotel-list.service';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.css']
})
export class HotelEditComponent implements OnInit {

  public hotelForm: FormGroup
  public hotel: IHotel
  public pageTitle : string
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private hotelService: HotelListService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.hotelForm = this.fb.group({
      hotelName: ['', Validators.required],
      hotelPrice: ['', Validators.required],
      starRating:[''],
      description: ['']
    })
    this.route.paramMap.subscribe(param =>{
      const _id = param.get('id')
      if(_id){

        const id = parseInt(_id)
        this.getSelectorHotel(id)
      }
    })
  }
  public getSelectorHotel(id: number){
    this.hotelService.getHotelById(id).subscribe(
      hotel => {
        if(hotel)
        this.displayHotel(hotel)
      })
  }
  public saveHotel(){

    if(this.hotelForm.valid){
      if(this.hotelForm.dirty){
        const hotel : IHotel = {
          ...this.hotel,
          ...this.hotelForm.value
        }
        if(hotel.id === 0){
          //edit
        }
        else{
            this.hotelService.updateHotel(hotel).subscribe({
              next: () => this.saveCompleted()
            })
        }
      }
    }
    
    
  }


  public displayHotel(hotel: IHotel){
    if(hotel.id ===0){
      this.pageTitle = "Créer un hotel"
    }
    else{
      this.pageTitle = `Modifier l'hotel ${hotel.hotelName}`
    }
    this.hotel = hotel

    this.hotelForm.patchValue({
      hotelName: this.hotel.hotelName,
      hotelPrice: this.hotel.price,
      starRating: this.hotel.rating,
      description: this.hotel.description
    })
  }

  public saveCompleted(): void{
    this.hotelForm.reset()
    this.router.navigate(['/hotels'])

  }
}
