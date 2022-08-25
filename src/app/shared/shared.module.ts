import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReplaceComma } from './replace-comma-pipe';
import { startRatingComponent } from './components/start-rating/star-rating.component';



@NgModule({
  declarations: [
    startRatingComponent,
    ReplaceComma
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    startRatingComponent,
    ReplaceComma
  ]
})
export class SharedModule { }
