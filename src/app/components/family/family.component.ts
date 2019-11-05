import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FamilyService } from '../../services/family.service'
import { Member } from '../../models/Member.model';


@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  //properties

  members: Member[];
    details:boolean;
  hide:boolean= false

  constructor(private familyService :FamilyService) {
  }

  ngOnInit() { 
  this.members = this.familyService.getMembers()
  }
  onSubmit(form: NgForm) {
  
    console.log(form)
    let newMember: Member = {
      title: form.value['title'],
      firstName: form.value['firstName'],
      lastName:form.value['lastName'],
      age: form.value['age'],
      job: form.value['job'],
      kids: form.value['kids'],
      details: form.value['details'],
      email:form.value['email']
    }
    this.members.push(newMember);
    form.reset()
    this.hide = false
    }
  }