import { Component, OnInit } from '@angular/core';
import {ReadMoreDirective} from '../../mod-dir/read-more.directive';
import { HomeServiceService } from '../home-service.service';
import { RoleName } from 'src/app/class/role-name';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  // private homeservice: HomeServiceService,private rolename: RoleName

  ngOnInit(): void {
    
  }

  // searchData(str: string){

  //   this.homeservice.searchData(str).subscribe(data=>{

  //   this.rolename= data;

  //   });}

}


