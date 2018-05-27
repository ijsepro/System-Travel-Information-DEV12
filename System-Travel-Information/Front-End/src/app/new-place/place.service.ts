import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Place } from '../models/place.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PlaceService {

  constructor(private http: HttpClient ) {}

  // private userUrl = 'http://localhost:8080/user-portal/user';
  private userUrl = '/api';

  public getPlace() {
    return this.http.get<Place[]>(this.userUrl);
  }

  public deletePlace(place) {
    return this.http.delete(this.userUrl + '/' + place.id);
  }

  public createPlace(place) {
    return this.http.post<Place>(this.userUrl, place);
  }

}
