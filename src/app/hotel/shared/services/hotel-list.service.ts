import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { IHotel } from "../models/hotel";

@Injectable({
    providedIn:'root'
})
export class HotelListService{
    private readonly HOTEL_API_URL = "api/hotel.json"

    constructor(private http: HttpClient    ){}
    public getHotel(): Observable<IHotel[]>{
        return this.http.get<IHotel[]>(this.HOTEL_API_URL).pipe(
            tap(hotels => console.log("hotels", hotels)),
            catchError(this.handleError)
        )
    }
    public getHotelById(id : number){
        return this.getHotel().pipe(
            map(hotels => hotels.find(hotel => hotel.hotelId === id))
        )

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