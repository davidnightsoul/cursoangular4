import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs';
import { User } from '../models/user';

const SERVER_REST_API_URL = "http://localhost:3000/users/";

@Injectable()
export class UserService {

 private http: Http;

 constructor(http:Http) {
   this.http = http;
 }

 getUsers() {
   return this.http.get(SERVER_REST_API_URL)
       .map(res => res.json());
 }

 saveUser(user:User) {
   let body = JSON.stringify({
       "id": user.id,
       "name": user.name,
       "username": user.username
   });
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
   return this.http.post(SERVER_REST_API_URL, body, options);
 }

  deleteUser(id) {
   return this.http.delete(SERVER_REST_API_URL + id);
 }

}
