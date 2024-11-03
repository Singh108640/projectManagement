import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ChartComponent } from './Components/chart/chart.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },{
path:'dashboard',
component:DashboardComponent
  },
  {
    path:'home',
    component:HomeComponent
      },
  {
    path:'chart',
    component:ChartComponent
   },
   
  {
    path:'',redirectTo:'/home',
    pathMatch:'full'
    },
    {
      path:'**',
       component:PageNotFoundComponent
   }





]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
