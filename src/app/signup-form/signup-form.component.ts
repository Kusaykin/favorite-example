import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UsernameValidators} from './username.vlidators';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      UsernameValidators.cannotContainSpace
    ]),
    password: new FormControl('', Validators.required),
  });
  get username() {
    return this.form.get('username');
  }
}
