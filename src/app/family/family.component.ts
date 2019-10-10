import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  //properties
  members: Member[]

  constructor() { 
  }
  ngOnInit() { 
    this.members = [
      {
        title:'Father',
        firstName:'Tolbah',
        lastName:'Hassanin',
        age:67,
        job:'Civil Engineer',
        kids: true
      },
      {
        title:'Mother',
        firstName:'Awatif',
        lastName:'Ali',
        age:62,
        job:'Teacher',
        kids: true
      },
      {
        title:'Son',
      firstName:'Tamer',
      lastName:'Tolbah',
      age:41,
      job:'IT Specialist',
      kids: true
    },
    {
      title:'Daughter',
      firstName:'Reham',
      lastName:'Tolbah',
      age:38,
      job:'IT Specialist',
      kids: true
    },
    {
      title:'Daughter',
      firstName:'Marwa',
      lastName:'Tolbah',
      age:37,
      job:'Civil Engineer',
      kids: true
    }
  ]
  }

  }
  interface Member {
    title:string,
    firstName: string,
    lastName: string,
    age?: number,
    job?:string,
    kids?: boolean
  }
