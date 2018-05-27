import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Place} from '../models/place.model';
import { PlaceService } from './place.service';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.css']
})
export class NewPlaceComponent {

  place: Place = new Place();

  constructor(private router: Router, private placeService: PlaceService) {

  }

  createPlace(): void {
    this.placeService.createPlace(this.place)
      .subscribe( data => {
        alert('Place created successfully.');
      });

  }
}
