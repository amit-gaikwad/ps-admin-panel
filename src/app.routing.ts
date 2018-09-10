import { NgModule   } from '@angular/core';

import { RouterModule , Routes } from '@angular/router';
import {AppComponent} from './app/app.component' ;
import {  StudentComponent } from './app/student/student.component';
import { ChartsComponent } from './app/charts/charts.component';
import { NoticePostComponent} from './app/notice-post/notice-post.component';
import { NoticeDisplayCompnent } from "./app/notice-display/notice-display.component";
import { EventComponent} from './app/event/event.component';
import { SchoolGalleryComponent } from './app/school-gallery/school-gallery.component';
import { StudentListComponent } from './app/student-list/student-list.component';
import { StudentInfoComponent } from './app/student-info/student-info.component';
import { LoginComponent} from './app/login/login.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { dashCaseToCamelCase } from '../node_modules/@angular/compiler/src/util';
import {ParentDashboardComponent} from './app/parent-dashboard/parent-dashboard.component';

  const routes : Routes = [ 
    { path : "", redirectTo : 'login', pathMatch: 'full'},
    { path : 'student' , component : StudentComponent },
    { path : 'charts' ,component : ChartsComponent }, 
    { path : 'noticepost', component : NoticePostComponent },
    { path : "noticedisplay", component: NoticeDisplayCompnent},
    { path :'programe', component : EventComponent},
    { path : 'gallery', component: SchoolGalleryComponent },
    { path : 'studentlist', component: StudentListComponent },
    { path : 'studentinfo', component: StudentInfoComponent },
    { path : 'login', component : LoginComponent},
    {path : 'dashboard' , component:DashboardComponent},
    {path : 'parentdashboard' , component: ParentDashboardComponent}



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
    export const Components = [AppComponent, StudentComponent, NoticePostComponent,
                               NoticeDisplayCompnent, LoginComponent, StudentInfoComponent,
                               StudentListComponent, EventComponent, SchoolGalleryComponent,
                               DashboardComponent]

    