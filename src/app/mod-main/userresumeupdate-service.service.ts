import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { ApplicationformClassTs } from '../class/applicationform-class.ts';

@Injectable({
  providedIn: 'root'
})
export class UserresumeupdateServiceService {

  private URL="http://localhost:8086/home";
  constructor(private httpClient: HttpClient) { }

  newsignupuser(resumeclass:ApplicationformClassTs):Observable<object>{
    return this.httpClient.post(`${this.URL}`,resumeclass);
  }
}
