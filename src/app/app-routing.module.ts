import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { SerachComponent } from './serach/serach.component';

const routes: Routes = [
  {path:'',redirectTo:"search",pathMatch:"full"},
  { path:"search",component:SerachComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


  