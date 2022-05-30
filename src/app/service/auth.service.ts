import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'https://routeegypt.herokuapp.com/';
  constructor(private _HttpClient: HttpClient) {}
  signin(data): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'signin', data);
  }
  signup(data): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'signup', data);
  }
  signOut(data): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'signOut', data);
  }
  isLogin = new BehaviorSubject(true);
}
