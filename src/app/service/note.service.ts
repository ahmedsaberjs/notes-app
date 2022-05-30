import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
baseUrl:string='https://routeegypt.herokuapp.com/'
  constructor(private _HttpClient:HttpClient) { }
  getUserNote(data):Observable<any>{
    return this._HttpClient.post(this.baseUrl+'getUserNotes',data)
  }
  updateNote(data):Observable<any>{
    return this._HttpClient.put(this.baseUrl+'updateNote',data)
  }
  deleteNote(data):Observable<any>{
    let options={
      headers:new HttpHeaders({}),
      body:data
    }
    return this._HttpClient.delete(this.baseUrl+'deleteNote',options)
  }
  addNote(data):Observable<any>{
    return this._HttpClient.post(this.baseUrl+'addNote',data)
  }

}
