import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { IHotel } from "../models/hotel";

@Injectable({
    providedIn:'root'
})
export class HotelListService{
    private readonly HOTEL_API_URL = "api/hotels"

    constructor(private http: HttpClient    ){}

    public getHotel(): Observable<IHotel[]>{
        return this.http.get<IHotel[]>(this.HOTEL_API_URL).pipe(
            tap(hotels => console.log("hotels", hotels)),
            catchError(this.handleError)
        )
    }

    public getHotelById(id : number){
        if(id === 0){
            return of(this.getDefaultHotel())
        }
        const url = `${this.HOTEL_API_URL}/${id}`
        return this.http.get<IHotel>(url).pipe(
            catchError(this.handleError)
        )

    }

    public updateHotel(hotel: IHotel):Observable<IHotel>{
        const url = `${this.HOTEL_API_URL}/${hotel.id}`
        return this.http.put<IHotel>(url, hotel).pipe(
            catchError(this.handleError)
        )

    }

   
    private  getDefaultHotel():  IHotel {
        return{
            id:0,
            hotelName:"",
            price:0,
            description:"",
            rating:0,
            imageUrl:""

        }
    }   
    private handleError(error: HttpErrorResponse){
        if(error.error instanceof ErrorEvent){
            console.error("An error occurred:", error.error.message)
        }
        else{
            console.error(
                `Backend returned code ${error.status}`,
                `Body was ${error.error}`
            )
        }
        return throwError(
            `something bad happened, plaise try again later`
        )
    }

}