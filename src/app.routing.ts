import { NgModule   } from '@angular/core';

import { RouterModule , Routes } from '@angular/router';
import {AppComponent} from './app/app.component' ;
import { AuthService } from './app/auth.service';
import { AuthGuard } from './app/auth.guard';
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
    { path : 'student' , component : StudentComponent , canActivate: 
    [AuthGuard] },
    { path : 'charts' ,component : ChartsComponent, canActivate: [AuthGuard]}, 
    { path : 'noticepost', component : NoticePostComponent,  canActivate: [AuthGuard]},
    { path : "noticedisplay", component: NoticeDisplayCompnent, canActivate: [AuthGuard]},
    { path :'programe', component : EventComponent, canActivate: [AuthGuard]},
    { path : 'gallery', component: SchoolGalleryComponent, canActivate: [AuthGuard] },
    { path : 'studentlist', component: StudentListComponent, canActivate: [AuthGuard] },
    { path : 'studentinfo', component: StudentInfoComponent, canActivate: [AuthGuard] },
    { path : 'login', component : LoginComponent},
    {path : 'dashboard' , component:DashboardComponent, canActivate: [AuthGuard]},
    {path : 'parentdashboard' , component: ParentDashboardComponent, canActivate: [AuthGuard]}



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

    