import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hotel } from '../models/hotel.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HotelService {

  constructor(private http: HttpClient ) {}

  // private userUrl = 'http://localhost:8080/user-portal/user';
  private userUrl = '/api';

  public getHotel() {
    return this.http.get<Hotel[]>(this.userUrl);
  }

  public deleteHotel(hotel) {
    return this.http.delete(this.userUrl + '/' + hotel.id);
  }

  public createHotel(hotel) {
    return this.http.post<Hotel>(this.userUrl, hotel);
  }

}
