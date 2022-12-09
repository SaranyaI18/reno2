import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserresumeupdateComponent } from './userresumeupdate/userresumeupdate.component';
import { AdminComponent } from './admin/admin.component';
import { UserstatusComponent } from './userstatus/userstatus.component';
import { JoblistComponent } from './joblist/joblist.component';

import { FormsModule } from '@angular/forms';
import { AutomanualComponent } from './automanual/automanual.component';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
    declarations: [
        HomeComponent,
        UserresumeupdateComponent,
        AdminComponent,
        UserstatusComponent,
        JoblistComponent,
        AutomanualComponent,
    ],
    exports: [
        HomeComponent,
        UserresumeupdateComponent,
        AdminComponent,
        UserstatusComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
    
    ]
})
export class ModMainModule { }
