import { Component, OnInit } from '@angular/core';
import { IHotel } from './hotel';
import { HotelListService } from './hotel-list.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.componet.html',
  styleUrls: ["./hotel-list.component.css"],
})
export class HotelListComponent implements OnInit {
  constructor(
    private hotelListService: HotelListService
){}

  public title = "Liste d'hotel";
  public hotels: IHotel[] =[]
  public showBadge: boolean = false;
 private _hotelFilter = 'mot';
  public filteredHotel : IHotel[] = []
  public recieveRating: string = ""

  ngOnInit(): void {
    this.hotels = this.hotelListService.getHotel()

    this.filteredHotel = this.hotels
    this._hotelFilter = ""
    
  }
  public toogleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  }

  public get hotelFilter(): string{
    return this._hotelFilter
  }

  public set hotelFilter(filter: string){
    this._hotelFilter = filter
    this.filteredHotel = this._hotelFilter ? this.filterHotel(this._hotelFilter) : this.hotels
  }

  private filterHotel(createria: string): IHotel[]{
    createria = createria.toLocaleLowerCase()
    const res = this.hotels.filter(
      (hotel) => hotel.hotelName.toLocaleLowerCase().indexOf(createria) !=-1
    )
    return res

  }

  public recieveRatingClicked(message : string){

    this.recieveRating = message
  }
}
