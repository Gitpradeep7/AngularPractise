import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { OneCompComponent } from './one-comp/one-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { AngcontainerComponent } from './angcontainer/angcontainer.component';
import { AngcontentComponent } from './angcontent/angcontent.component';
import { AngtemplateComponent } from './angtemplate/angtemplate.component';
import { FormCompComponent } from './form-comp/form-comp.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ColorComponent } from './color/color.component';
import { TableComponent } from './table/table.component';
import { PosttableComponent } from './posttable/posttable.component';
import { HttpClientModule } from '@angular/common/http';
import { TabsComponent } from './tabs/tabs.component';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    OneCompComponent,
    MainComponent,
    AngcontainerComponent,
    AngcontentComponent,
    AngtemplateComponent,
    FormCompComponent,
    ChildComponent,
    ParentComponent,
    ViewchildComponent,
    ColorComponent,
    TableComponent,
    PosttableComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
