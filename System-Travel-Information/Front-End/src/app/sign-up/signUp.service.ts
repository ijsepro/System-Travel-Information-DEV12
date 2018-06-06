import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

import { RegisterUser } from '../models/registerUser.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegisterUserService {

  constructor(private http: HttpClient ) {}

  // private userUrl = 'http://localhost:8080/user-portal/user';
  private userUrl = '/api';

  public createRegisterUser(registerUser) {
    return this.http.post<RegisterUser>(this.userUrl, registerUser);
  }

}
