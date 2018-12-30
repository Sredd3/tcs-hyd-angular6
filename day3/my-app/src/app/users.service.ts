import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  fetchAllUsers():Observable<HttpResponse<User[]>>{
    return this.httpClient.get<HttpResponse<User[]>>('https://jsonplaceholder.typicode.com/users');
  }
}
