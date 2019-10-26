import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  //properties
  newMember: Member = {
    title: '',
    firstName: '',
    lastName:'',
    age: null,
    job: '',
    kids: true,
    details: true,
    email:''
  }
  members: Member[];
  details:boolean;
  hide:boolean= false;
  
  @ViewChild('memberForm') form:any

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
        details:false,
        email: 'tolbah.hassanin@yahoo.com'
      },
      {
        title:'Mother',
        firstName:'Awatif',
        lastName:'Ali',
        age:62,
        job:'Teacher',
        kids: true,
        details:false,
        email: 'omtamer@gmail.com'
      },
      {
        title:'Son',
      firstName:'Tamer',
      lastName:'Tolbah',
      age:41,
      job:'IT Specialist & Web Desiger',
      kids: true,
      details:false,
      email: 'tamer.tolbah@getMaxListeners.com'
    },
    {
      title:'Daughter',
      firstName:'Reham',
      lastName:'Tolbah',
      age:38,
      job:'Quality Assurance',
      kids: true,
      details:false,
      email: 'reham.tolbah@yahoo.com'
    },
    {
      title:'Daughter',
      firstName:'Marwa',
      lastName:'Tolbah',
      age:37,
      job:'Civil Engineer',
      kids: true,
      details:false,
      email: 'marwa.tolba@getMaxListeners.com'
    }
  ]
  
  }
  showAddForms = () => {this.hide = !this.hide}
  show = (member: Member) => {member.details = !member.details}
//   addMember = () => {this.members.push(this.NewMember);
//   this.NewMember ={
//     title: '',
//     firstName: '',
//     lastName:'',
//     age: null,
//     job: '',
//     kids:true,
//     details: true,
//     email: ''
//   }
// }

  onSubmit({value,valid}: {value:Member, valid: boolean}) {
    if(!valid){
      console.log('form is not vaid');
    }else {
        this.members.push(value)
      }
    }
  }
  
  interface Member {
    title:string,
    firstName: string,
    lastName: string,
    age?: number,
    job?:string,
    kids?: boolean,
    details?: boolean
    email: string,
  }

 