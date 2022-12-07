import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationformClassTs } from 'src/app/class/applicationform-class.ts';
import { UserresumeupdateServiceService } from '../userresumeupdate-service.service';

@Component({
  selector: 'app-userresumeupdate',
  templateUrl: './userresumeupdate.component.html',
  styleUrls: ['./userresumeupdate.component.css']
})
export class UserresumeupdateComponent implements OnInit {
  resumeclass : ApplicationformClassTs = new ApplicationformClassTs();

 
  constructor() { }

  // private userresume: UserresumeupdateServiceService, private router: Router

  ngOnInit(): void {
  }

  // saveResume(){
  //   this.userresume.newsignupuser(this.resumeclass).subscribe(data=>{
  //     this.gotoEmployeeList();
  //   },
  //   error=>console.log(error));
  // }

  // gotoEmployeeList(){
  //   alert('Your application is submitted.');
  // }

  // onSubmit(){
  //   console.log(this.resumeclass);
  //   this.saveResume();
  // }

}





