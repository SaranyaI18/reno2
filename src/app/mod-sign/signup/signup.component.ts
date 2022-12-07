// import { SignupServiceService } from './../signup-service.service';
import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupClass } from 'src/app/class/signup-class';
import { LoginComponent } from '../login/login.component';
import { SignupServiceService } from '../signup-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupuser:SignupClass = new SignupClass();

  constructor(private signupservice: SignupServiceService, private router: Router) { }
  // private signupservice: SignupServiceService, private router: Router

  ngOnInit(): void {
  }

  saveUser(){
    this.signupservice.newsignupuser(this.signupuser).subscribe(data=>{
      return this.gotoEmployeeList();
    })
    // error=>console.log(error));
  }

  gotoEmployeeList(){
    this.router.navigate(['Home']);
  }

  onSubmit(){
    // console.log(this.signupuser);
    return this.saveUser();
  }

}
  // function gotoEmployeeList(): ((error: any) => void) | null | undefined {
  //   throw new Error('Function not implemented.');
  // }

