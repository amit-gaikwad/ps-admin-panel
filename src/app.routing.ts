import { NgModule   } from '@angular/core';

import { RouterModule , Routes } from '@angular/router';
import {AppComponent} from './app/app.component' ;
import { AuthService } from './app/auth.service';
import { AuthGuard } from './app/auth.guard';
import {AdminAuthGuard} from './app/admin-auth.guard';

import {  StudentComponent } from './app/student/student.component';
import { ChartsComponent } from './app/charts/charts.component';
import { NoticePostComponent} from './app/notice-post/notice-post.component';
import { NoticeDisplayCompnent } from "./app/notice-display/notice-display.component";
import { EventComponent} from './app/event/event.component';
import { SchoolGalleryComponent } from './app/school-gallery/school-gallery.component';
import { StudentListComponent } from './app/student-list/student-list.component';
import { StudentInfoComponent } from './app/student-info/student-info.component';
import { ParentLoginComponent} from './app/parent-login/parent-login.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import {ParentDashboardComponent} from './app/parent-dashboard/parent-dashboard.component';
import { AdminLoginComponent } from './app/admin-login/admin-login.component';
import { SidebarComponent } from './app/sidebar/sidebar.component';
import { ParentAuthGuard } from './app/parent-auth.guard';
import { UploadMarksComponent } from './app/upload-marks/upload-marks.component';

  const routes : Routes = [ 
    { path : "", redirectTo : 'parentlogin', pathMatch: 'full'},
    { path : 'student' , component : StudentComponent , canActivate: [AdminAuthGuard] },
    { path : 'charts' ,component : ChartsComponent, canActivate: [ParentAuthGuard]}, 
    { path : 'noticepost', component : NoticePostComponent,  canActivate: [AdminAuthGuard]},
    { path : "noticedisplay", component: NoticeDisplayCompnent, canActivate: [AuthGuard]},
    { path :'programe', component : EventComponent, canActivate: [AdminAuthGuard]},
    { path : 'gallery', component: SchoolGalleryComponent, canActivate: [AuthGuard ]},
    { path : 'studentlist', component: StudentListComponent, canActivate: [AdminAuthGuard] },
    { path : 'studentinfo', component: StudentInfoComponent, canActivate: [AuthGuard] },
    { path : 'dashboard' , component:DashboardComponent, canActivate: [AuthGuard]},
    { path : 'parentdashboard' , component: ParentDashboardComponent, canActivate: [ParentAuthGuard]},
    { path : 'sidebar', component : SidebarComponent},
    { path : 'parentlogin', component : ParentLoginComponent},
    { path : 'adminlogin' , component  : AdminLoginComponent },
    { path : 'studentmarks', component : UploadMarksComponent}


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
                               NoticeDisplayCompnent, ParentLoginComponent, StudentInfoComponent,
                               StudentListComponent, EventComponent, SchoolGalleryComponent,
                               DashboardComponent, UploadMarksComponent]

    