// import { AdminloginComponent } from './admin-process/adminlogin/adminlogin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/mod-sign/login/login.component';
import { AdminComponent } from './mod-main/admin/admin.component';
import { HomeComponent } from './mod-main/home/home.component';
import { UserresumeupdateComponent } from './mod-main/userresumeupdate/userresumeupdate.component';
import { UserstatusComponent } from './mod-main/userstatus/userstatus.component';
import { SignupComponent } from '../app/mod-sign/signup/signup.component';
import { JoblistComponent } from './mod-main/joblist/joblist.component';
import { AcceptedCandiComponent } from './admin-process/accepted-candi/accepted-candi.component';
import { RejectedCandComponent } from './admin-process/rejected-cand/rejected-cand.component';
import { AdminloginComponent } from './admin-process/adminlogin/adminlogin.component';

const routes: Routes = [
  {path:'', redirectTo: 'Login', pathMatch: 'full'},
  {path:'SignUp', component:SignupComponent},
  {path:'Login', component:LoginComponent},
  {path: 'Home', component:HomeComponent},
  {path:'apply-job', component:UserresumeupdateComponent},
  {path:'adminhome', component: AdminComponent},
  {path:'application-status', component:UserstatusComponent},
  {path: 'Jobs', component:JoblistComponent},
  {path: 'accepted-candidate', component:AcceptedCandiComponent},
  {path: 'rejected-candidate', component:RejectedCandComponent},
  {path: 'admin', component:AdminloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// const routes: Routes = [
//   {path:'', redirectTo: 'Home', pathMatch: 'full'},
//   {path:'SignUp', component:SignupComponent},
//   {path:'Login', component:LoginComponent},
//   {path: 'Home', component:HomeComponent},
//   {path:'apply-job', component:UserresumeupdateComponent},
//   {path:'admin', component: AdminComponent},
//   {path:'application-status', component:UserstatusComponent},
//   {path: 'Jobs', component:JoblistComponent},
//   {path: 'accepted-candidate', component:AcceptedCandiComponent},
//   {path: 'rejected-candidate', component:RejectedCandComponent}
// ]
