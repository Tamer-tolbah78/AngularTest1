import { Injectable } from '@angular/core';
import { Member } from '../models/Member.model';


@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor() {
   }

   members:Member[] = [
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
  
  getMembers() :Member[] {return this.members}  
}