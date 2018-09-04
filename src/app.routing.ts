import { NgModule   } from '@angular/core';

import { RouterModule , Routes } from '@angular/router';
import {AppComponent} from './app/app.component' ;
import {  StudentComponent } from './app/student/student.component';
import { ChartsComponent } from './app/charts/charts.component';
import { NoticePostComponent} from './app/notice-post/notice-post.component';
import { NoticeDisplayCompnent } from "./app/notice-display/notice-display.component";
import { StudentListComponent } from './app/student-list/student-list.component';
  const routes : Routes = [ 
   
    { path : 'Student' , component : StudentListComponent },
    { path : '' ,component : ChartsComponent }, 
    { path : 'NoticePost', component : NoticePostComponent },
    { path : "NoticeDisplay", component: NoticeDisplayCompnent}
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
    export const Components = [AppComponent, StudentComponent, NoticePostComponent, NoticeDisplayCompnent]

    