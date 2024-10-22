import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  parentInput: string = '';
  childMessage: string = '';

  receiveMessage(message: string) {
    this.childMessage = message;
 
  }
}
