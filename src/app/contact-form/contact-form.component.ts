import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  contactMethod = [
    {id: 1, name: 'email 1'},
    {id: 2, name: 'email 2'},
    {id: 3, name: 'email 3'},
  ];
  constructor() { }
  submit(f) {
    console.log(f);
  }

  log(log) {
    console.log(log);
  }

}
