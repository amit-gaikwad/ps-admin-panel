import { NgModule   } from '@angular/core';

import { RouterModule , Routes } from '@angular/router';
import {AppComponent} from './app/app.component' ;
import {  StudentComponent } from './app/student/student.component';
import { ChartsComponent } from './app/charts/charts.component';
import { ProgrmmeComponent } from './app/progrmme/progrmme.component';
  const routes: Routes = [

    { path: 'Student' , component : StudentComponent },
    { path: '' , component : ChartsComponent },
    // { path:'NoticeBoard' ,component: },
     { path: 'Programme' , component: ProgrmmeComponent} ,
    // { path: 'Website',component:'' }

];

@NgModule(
    {
        imports : [ RouterModule.forRoot(routes) ]    ,
        exports : [ RouterModule]
    })

    export class AppRouting {}
    export const Components = [AppComponent, StudentComponent, ProgrmmeComponent];


