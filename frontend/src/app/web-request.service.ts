import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    if (process.env.NODE_ENV == 'production')
    {
      this.ROOT_URL = ''
    }
    else{
      this.ROOT_URL = 'http://localhost:3000';
    } 
    //this.ROOT_URL = '';
    
}

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  put(uri: string, payload: Object) {
    return this.http.put(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

  login(email: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/users/login`, {
      email,
      password
    }, { 
      observe: 'response' 
    });
  }

  signup(email: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/users`, {
      email,
      password
    }, { 
      observe: 'response'
    });
  }

  changePw(email: string, password: string, userId: string){
    return this.http.put(`${this.ROOT_URL}/users/${userId}`, {
      email,
      password
    }, {
      observe: 'response' 
    });
  }

}