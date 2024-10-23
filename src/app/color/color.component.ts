import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {
  colors = ['red', 'green', 'blue', 'yellow', 'orange'];
  selectedColor: string = '';
constructor(){}
ngOnInit(){}
ngAfterViewInit()
{
  this.countCheckedListItems();
}
  changeColor(color: string, event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.selectedColor = checkbox.checked ? color : ''; 
  }
  countCheckedListItems() {
    const checkedListItems = document.querySelectorAll('input[type="checkbox"]:checked'); 
    const checkedCount = checkedListItems.length; 
    console.log("Number of checked list items:", checkedCount); 
  }
}
