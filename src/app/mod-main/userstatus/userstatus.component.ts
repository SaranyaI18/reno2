import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userstatus',
  templateUrl: './userstatus.component.html',
  styleUrls: ['./userstatus.component.css']
})
export class UserstatusComponent implements OnInit {
  isCollapsed = false;
  flag = true;
  constructor() { }

  ngOnInit(): void {
  }
  data(){
    if(this.flag){
      this.flag = false;
    }
    else{
      this.flag = true;
    }
  }

}
