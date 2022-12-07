import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupClass } from './class/signup-class';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // basicurl="http://localhost:8086/patient";
  // constructor(private httpClient: HttpClient) { }

  // newsignupuser(signupuser:SignupClass):Observable<Object>{
  //   return this.httpClient.post<SignupClass>(`${this.basicurl}`,signupuser);
  // }

  // constructor() { }
}
