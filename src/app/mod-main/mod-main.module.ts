import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserresumeupdateComponent } from './userresumeupdate/userresumeupdate.component';
import { AdminComponent } from './admin/admin.component';
import { UserstatusComponent } from './userstatus/userstatus.component';
import { JoblistComponent } from './joblist/joblist.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SignupServiceService } from '../mod-sign/signup-service.service';
import { HomeServiceService } from './home-service.service';
import { UserresumeupdateServiceService } from './userresumeupdate-service.service';



@NgModule({
  declarations: [
    HomeComponent,
    UserresumeupdateComponent,
    AdminComponent,
    UserstatusComponent,
    JoblistComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    UserresumeupdateComponent,
    AdminComponent,
    UserstatusComponent,
   
  ]
 
})
export class ModMainModule { }
