import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent {
  @ViewChild ('green') Green: any;
  @ViewChild ('blue') Blue: any;

  intoGreen(){
    this.Green.nativeElement.setAttribute("style", "color:Green");
  }
  intoBlue(){
    this.Blue.nativeElement.setAttribute("style", "color:Blue");
  }

}
