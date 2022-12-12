import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { ApplicationformClassTs } from '../class/applicationform-class.ts';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private basicURL="http://localhost:8086/admin-details";

  constructor(private httpClient: HttpClient) { }

  getuserById(id:number):Observable<ApplicationformClassTs>{
    return this.httpClient.get<ApplicationformClassTs>(`${this.basicURL}/${id}`);
  }

  deleteuser(id:number):Observable<object>{
    return this.httpClient.delete(`${this.basicURL}/${id}`);
  }
}
