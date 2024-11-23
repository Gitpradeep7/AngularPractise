import { Component } from '@angular/core';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {
  data:any[]=[];
  originalData: any;
constructor(private nt:NetworkService){}
ngOnInit(){
  this.nt.getShopURL().subscribe((res:any)=>{
    this.data = res;
    this.originalData = this.data;
    console.log('16',res);
    console.log('17',this.originalData)
  })
}
}
