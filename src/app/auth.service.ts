import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient) {
  }

  logIn(data: string){    
  debugger
    return this.http.post<any>('https://jsonplaceholder.typicode.com/posts','');
  }
}