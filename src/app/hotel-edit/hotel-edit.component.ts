import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      price: ['', Validators.required],
      rating:[''],
      description: [''],
      tag: this.fb.array([])
    })
    this.route.paramMap.subscribe(param =>{
      const _id = param.get('id')
      if(_id){

        const id = parseInt(_id)
        this.getSelectorHotel(id)
      }
    })
  }

  public get tags (): FormArray{
    return this.hotelForm.get('tags') as FormArray
  }

  public addTags(): void{
    this.tags.push(new FormControl())
  }

  public deleteTag(index: number):void{
    this.tags.removeAt(index)
    this.tags.markAsDirty()
  }

  //display Hotel
  public getSelectorHotel(id: number){
    this.hotelService.getHotelById(id).subscribe(
      hotel => {
        if(hotel)
        this.displayHotel(hotel)
      })
  }

  //update hotel
  public saveHotel(){

    if(this.hotelForm.valid){
      if(this.hotelForm.dirty){
        const hotel : IHotel = {
          ...this.hotel,
          ...this.hotelForm.value
        }
        if(hotel.id === 0){
        
         this.hotelService.createHotel(hotel).subscribe({
          next: () => this.saveCompleted()
         })
        }
        else{
            this.hotelService.updateHotel(hotel).subscribe({
              next: () => this.saveCompleted()
            })
        }
      }
    }
    
    
  }



  //display hotel use by Selector hotel
  public displayHotel(hotel: IHotel){
    if(hotel.id ===0){
      this.pageTitle = "Créer un hotel"
    }
    else{
      this.pageTitle = `Modifier l'hotel ${hotel.hotelName}`
    }
    this.hotel = hotel

    //get form value
    this.hotelForm.patchValue({
      hotelName: this.hotel.hotelName,
      price: this.hotel.price,
      rating: this.hotel.rating,
      description: this.hotel.description
    })
    this.hotelForm.setControl('tags', this.fb.array(this.hotel.tags || []))
  }

  //delete hotel
  public deleteHotel(){
    if(confirm(`Voulez vous supprimer hotel ${this.hotel.hotelName} ?`)){
      this.hotelService.deleteHotel(this.hotel.id).subscribe({
        next: () => this.saveCompleted()
      })
    }

  }

  //reset hotel form
  public saveCompleted(): void{
    this.hotelForm.reset()
    this.router.navigate(['/hotels'])

  }
}
