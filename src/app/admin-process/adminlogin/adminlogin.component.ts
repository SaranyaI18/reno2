import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupServiceService } from 'src/app/mod-sign/signup-service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adminemail !: string;
  adminpassword !: String;
  email!: string;
  pass!: string;
  constructor(private login:SignupServiceService, private router:Router) { 
    
  }

  ngOnInit(): void {
  }
  adminsub(){
    // if()
    if(this.email=='admin@123' && this.pass == 'lohideekshu'){
      this.router.navigate(['adminhome'])
    }
    else{
      this.router.navigate(['SignUp'])
    }

  }

}
