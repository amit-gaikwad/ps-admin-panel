import { NgModule   } from '@angular/core';

import { RouterModule , Routes } from '@angular/router';
import {AppComponent} from './app/app.component' ;
import {  StudentComponent } from './app/student/student.component';
import { ChartsComponent } from './app/charts/charts.component';
  const routes : Routes = [ 
   
    { path:'Student' , component : StudentComponent },
    { path:'' ,component : ChartsComponent }, 
    // { path:'NoticeBoard' ,component: },
    // { path:'Progrmme' , component: } ,
    // { path: 'Website',component:'' }

]

@NgModule(
    {
        imports :[ RouterModule.forRoot(routes) ]    ,
        exports : [ RouterModule]
    })

    export class AppRouting {}
    export const Components = [AppComponent,StudentComponent]

    