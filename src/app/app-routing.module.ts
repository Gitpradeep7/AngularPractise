import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngcontainerComponent } from './angcontainer/angcontainer.component';
import { AngcontentComponent } from './angcontent/angcontent.component';
import { AngtemplateComponent } from './angtemplate/angtemplate.component';
import { PageOneComponent } from './page-one/page-one.component';
import { FormCompComponent } from './form-comp/form-comp.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [{path:'',component:AngcontainerComponent},
  {path:'Container',component:AngcontainerComponent},
  {path:'Content',component:AngcontentComponent},
  {path:'Template',component:AngtemplateComponent},
  {path:'Form',component:FormCompComponent},
  {path:'InputOutput',component:ParentComponent},
  {path:'**',component:PageOneComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
