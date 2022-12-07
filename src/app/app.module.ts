import { FormsModule } from '@angular/forms';
import { SignupComponent } from './mod-sign/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { ModMainModule } from './mod-main/mod-main.module';

import { ModDirModule } from './mod-dir/mod-dir.module';
import { ModSignModule } from './mod-sign/mod-sign.module';
import { SignupServiceService } from './mod-sign/signup-service.service';
import { UserresumeupdateServiceService } from './mod-main/userresumeupdate-service.service';
// import { AdminProcessModule } from './admin-process/admin-process.module';
import { HomeServiceService } from './mod-main/home-service.service';
import { AdminloginComponent } from './admin-process/adminlogin/adminlogin.component';
// import { SignupComponent } from './mod-sign/signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    // SignupComponent
   
    
 
  ],
  imports: [
    BrowserModule,
    ModMainModule,
    AppRoutingModule,
    ModDirModule,
    ModSignModule,
    // AdminProcessModule,
    ModMainModule,
    HttpClientModule,
    FormsModule
    
    
  ],
  providers: [SignupServiceService,
  UserresumeupdateServiceService,
HomeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
