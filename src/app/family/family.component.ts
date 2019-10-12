import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  //properties
  members: Member[]
  details:boolean
  hide:boolean= false
 
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
        kids: true,
        details:false
      },
      {
        title:'Mother',
        firstName:'Awatif',
        lastName:'Ali',
        age:62,
        job:'Teacher',
        kids: true,
        details:false
      },
      {
        title:'Son',
      firstName:'Tamer',
      lastName:'Tolbah',
      age:41,
      job:'IT Specialist & Web Desiger',
      kids: true,
      details:false
    },
    {
      title:'Daughter',
      firstName:'Reham',
      lastName:'Tolbah',
      age:38,
      job:'Quality Assurance',
      kids: true,
      details:false
    },
    {
      title:'Daughter',
      firstName:'Marwa',
      lastName:'Tolbah',
      age:37,
      job:'Civil Engineer',
      kids: true,
      details:false
    }
  ]
  
  }
  hideExtend = () => {this.hide = !this.hide}
  show = (member: Member) => {member.details = !member.details}
  addMember = (member : Member) => {this.members.push(member)}
}
  
  interface Member {
    title:string,
    firstName: string,
    lastName: string,
    age?: number,
    job?:string,
    kids?: boolean,
    details: boolean
  }

  