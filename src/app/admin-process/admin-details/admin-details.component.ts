import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/mod-main/admin-service.service';
import { ActivatedRoute } from '@angular/router';
import { ApplicationformClassTs } from 'src/app/class/applicationform-class.ts';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {
  id!: number;
  user!: ApplicationformClassTs;

  constructor(private route: ActivatedRoute, private adminservice: AdminServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.user=new ApplicationformClassTs;
    this.adminservice.getuserById(this.id).subscribe(data=>{
      this.user=data;
    })
  }

}
