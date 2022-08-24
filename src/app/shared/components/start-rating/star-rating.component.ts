import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector:"app-star-rating",
    templateUrl:"./star-rating.component.html",
    styleUrls:["./star-rating.component.css"]
})
export class startRatingComponent implements OnChanges{
    public startWidth :number = 0;
    @Input() 
    public rating :number =2

    @Output()
    public starRatingClicked: EventEmitter<string> = new EventEmitter<string>()

    ngOnChanges(){
        this.startWidth= this.rating * 125 / 5
        
    }

    public sendRating():void{
        this.starRatingClicked.emit(`le mot est de ${this.rating}`)
    }

}