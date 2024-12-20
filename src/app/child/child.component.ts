import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() inputValue: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(item:any) {
    this.messageEvent.emit(item);
  }
}
