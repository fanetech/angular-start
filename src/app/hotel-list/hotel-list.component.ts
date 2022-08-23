import { Component, OnInit } from '@angular/core';
import { IHotel } from './hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.componet.html',
  styleUrls: [],
})
export class HotelListComponent implements OnInit {
  public title = "Liste d'hotel";
  public hotels: IHotel[] = [
    {
      hotelId: 1,
      hotelName: 'Buea sweet life',
      description: 'Belle vue au bord de la mer',
      price: 230.5,
      imageUrl: 'assets/img/hotel-room.jpg',
      rating: 3.5,
    },
    {
      hotelId: 2,
      hotelName: 'Marakech',
      description: 'Profitez de la vue sur les montagnes',
      price: 145.5,
      imageUrl: 'assets/img/the-interior.jpg',
      rating: 5,
    },
    {
      hotelId: 3,
      hotelName: 'Abudja new look palace',
      description: 'Séjour complet avec service de voitures',
      price: 120.12,
      imageUrl: 'assets/img/indoors.jpg',
      rating: 4,
    },
    {
      hotelId: 4,
      hotelName: 'Cape town city',
      description: 'Magnifique cadre pour votre séjour',
      price: 135.12,
      imageUrl: 'assets/img/window.jpg',
      rating: 2.5,
    },
  ];
  public showBadge: boolean = false;
  public hotelFilter = 'mot';

  ngOnInit(): void {
    console.log("display if component in mont")
    
  }
  public toogleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  }
}
