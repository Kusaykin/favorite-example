import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  @Input('title') title: string;

  // tslint:disable-next-line:no-inferrable-types
  isExpanded: boolean = true;
  constructor() { }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }


}
