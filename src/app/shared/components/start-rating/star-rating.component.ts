import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector:"app-star-rating",
    templateUrl:"./star-rating.component.html",
    styleUrls:["./star-rating.component.css"]
})
export class startRatingComponent implements OnChanges{
    public startWidth :number = 0;
    @Input()
    public rating :number =2
    ngOnChanges(){
        this.startWidth= this.rating * 125 / 5
        
    }

}