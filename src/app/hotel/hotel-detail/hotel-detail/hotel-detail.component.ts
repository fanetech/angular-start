import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHotel } from '../../shared/models/hotel';
import { HotelListService } from '../../shared/services/hotel-list.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private hotelListService: HotelListService,
    private router: Router
  ) { }

  public hotel: any

  ngOnInit(): void {
    let id= this.route.snapshot.paramMap.get('id')
    if(id){
     const _id = parseInt(id)
      this.hotelListService.getHotel().subscribe(
        (hotels) =>{
          this.hotel = hotels.find((hotel) => hotel.id === _id)
          console.log(this.hotel)
        }
      )

    }
    else id = null
  }

  public backToList():void{
    this.router.navigate(['/hotels'])

  }
}
