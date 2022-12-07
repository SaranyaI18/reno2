import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { SignupClass } from '../class/signup-class';

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {
  login(email: string, password: string) {
    throw new Error('Method not implemented.');
  }

  basicURL="http://localhost:8087/signup";
  constructor(private httpClient: HttpClient) { }

  newsignupuser(signupuser:SignupClass):Observable<Object>{
    console.log(signupuser);
    return this.httpClient.post(`${this.basicURL}`,signupuser);
  }
  loginuser(email:string,password:string):Observable<SignupClass>{
    console.log(email);
    return this.httpClient.get<SignupClass>(`${this.basicURL}/${email}/${password}`);
  }

  getalll():Observable<SignupClass[]>{
    return this.httpClient.get<SignupClass[]>(`${this.basicURL}`);
  }
  
}
