
import { Component, ViewChild } from '@angular/core';
import { NetworkService } from '../network.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-posttable',
  templateUrl: './posttable.component.html',
  styleUrls: ['./posttable.component.scss']
})
export class PosttableComponent {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) matsort!:MatSort;
  post:any;
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  navData$: any;
  constructor(private nt:NetworkService){
  }
  ngOnInit(){
    this.nt.getPostURl().subscribe((res:any)=>{
      this.post = new MatTableDataSource<Posting>(res);
    })
  }
  ngAfterViewInit() {
    this.post.paginator = this.paginator;
    this.post.matsort = this.matsort;
  }
  
}
export interface Posting {
  userId:number;
  id:number;
  title:string;
  body:string;
}

