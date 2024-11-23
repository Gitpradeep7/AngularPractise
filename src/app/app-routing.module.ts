import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngcontainerComponent } from './angcontainer/angcontainer.component';
import { AngcontentComponent } from './angcontent/angcontent.component';
import { AngtemplateComponent } from './angtemplate/angtemplate.component';
import { PageOneComponent } from './page-one/page-one.component';
import { FormCompComponent } from './form-comp/form-comp.component';
import { ParentComponent } from './parent/parent.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ColorComponent } from './color/color.component';
import { TableComponent } from './table/table.component';
import { PosttableComponent } from './posttable/posttable.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [{path:'',component:AngcontainerComponent},
  {path:'Container',component:AngcontainerComponent},
  {path:'Content',component:AngcontentComponent},
  {path:'Template',component:AngtemplateComponent},
  {path:'Form',component:FormCompComponent},
  {path:'InputOutput',component:ParentComponent},
  {path:'ViewChild',component:ViewchildComponent},
  {path:'Color',component:ColorComponent},
  {path:'Tabs',component:TabsComponent,children:[
    {path:'Table',component:TableComponent},
    {path:'Posttable',component:PosttableComponent}
  ]},
  {path:'**',component:PageOneComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
