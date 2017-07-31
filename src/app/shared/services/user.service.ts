import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs';
import { User } from '../models/user';
import { environment } from '../../../environments/environment'

const SERVER_REST_API_URL = "http://localhost:3000/users/";

@Injectable()
export class UserService {

 private http: Http;
 private serverRestAPIUrl: string;

 constructor(http:Http) {
   this.http = http;
   this.serverRestAPIUrl = environment.apiEndPoint + "/users";
 }

 getUsers() {
   return this.http.get(this.serverRestAPIUrl)
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
   return this.http.post(this.serverRestAPIUrl, body, options);
 }

  deleteUser(id) {
   return this.http.delete(this.serverRestAPIUrl + id);
 }

}
