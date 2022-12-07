import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {

  public jobroles=[
    {
      rolename: 'Senior Java Developer',
      description: 'Must be familiar with Springboot and Hibernate.Should have good understanding in Oops.Should know to debug.',
      experience: '3'
  },
  {
    rolename: 'Test Lead',
    description: 'Must be familiar with Springboot and Hibernate.Should have good understanding in Oops.Should know to debug.',
    experience: '5'
  },
  {
    rolename: 'Devops Engineer',
    description: 'Must be familiar with Springboot and Hibernate.Should have good understanding in Oops.Should know to debug.',
    experience: '4'
  },
  {
    rolename: 'Automation Test Engineer',
    description: 'Must be familiar with Springboot and Hibernate.Should have good understanding in Oops.Should know to debug.',
    experience: '2'
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
