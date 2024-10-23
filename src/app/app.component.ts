import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;
  item:string='';
  angularTopic = ['Container','Template','Content','Form','InputOutput','ViewChild','Color'];
  buttonToggle(item:any){
    this.item=item;
  }
}
