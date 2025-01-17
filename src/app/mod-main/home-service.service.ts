import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  private basicURL="http://localhost:8086/home";
  constructor(private httpClient:HttpClient) { }

  searchData(str:string):Observable<any>{

    return this.httpClient.get<any>(`${this.basicURL}/search/${str}`);

  }
}
