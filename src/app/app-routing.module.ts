import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DefaultComponent } from './Components/default/default.component';

const routes: Routes = [
  {path:'', component: DefaultComponent,
  children : [
    {path: 'dashboard', component: DashboardComponent}/* ,
    {path:'posts', component: PostsComponent} */
    

   
  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
