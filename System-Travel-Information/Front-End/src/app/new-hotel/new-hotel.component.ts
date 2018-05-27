import { Component, OnInit } from '@angular/core';
import {Place} from '../models/place.model';
import {Router} from '@angular/router';
import {PlaceService} from '../new-place/place.service';
import {Hotel} from '../models/hotel.model';
import {HotelService} from './hotel.service';

@Component({
  selector: 'app-new-hotel',
  templateUrl: './new-hotel.component.html',
  styleUrls: ['./new-hotel.component.css']
})
export class NewHotelComponent {

  hotel: Hotel = new Hotel();

  constructor(private router: Router, private hotelService: HotelService) {

  }

  createHotel(): void {
    this.hotelService.createHotel(this.hotel)
      .subscribe( data => {
        alert('Hotel created successfully.');
      });

  }

}
