import { SignupClass } from 'src/app/class/signup-class';
import { Router } from '@angular/router';
import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { SignupServiceService } from '../signup-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  pass!: string;
  constructor(private login:SignupServiceService, private router:Router) { }
  user!: SignupClass[];
  ngOnInit(): void {
   this.login.getalll().subscribe(d=>{
    this.user=d;
    console.log(this.user);

   })
  }

// sub(){
// //  for(let i=0;i<this.user.length;i++){
// //   if(this.user[i].email==this.email && this.user[i].password == this.pass){
// //     // console.log(this.user[i].email);
// //     // console.log(this.user[i].password);
// //     // console.log(this.email);
// //     // console.log(this.pass);
// //     this.router.navigate(['Home'])
    
    
// //   }else {
// //     this.router.navigate(['SignUp']);
// //     // alert("hi joweg")
  flag!: boolean;
  sub(){
    this.flag= false; 
    for(let i=0;i<this.user.length;i++){
      console.log(this.email)
      console.log(this.pass)
      
      console.log("0")
      if(this.user[i].email == this.email && this.user[i].password == this.pass){
        
        // this.navig();
        this.router.navigate(['Home']);
        // break;
        console.log("1");
        break;
        
      }
      else{
        // alert("invaild username or password");
        this.out();
        console.log("2");
      }
      console.log("3")
      
    }
   
  
  
      // this.router.navigate(['SignUp'])
    
    
      // 
      
    
  };
  // navig(){);
  //   };
  out(){
    // alert("invalid username or pass")
    this.router.navigate(['SignUp'])
  }

   } ;




