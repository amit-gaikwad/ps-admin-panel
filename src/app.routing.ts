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

  const routes : Routes = [ 
   
    { path : 'Student' , component : StudentComponent },
    { path : '' ,component : ChartsComponent }, 
    { path : 'NoticePost', component : NoticePostComponent },
    { path : "NoticeDisplay", component: NoticeDisplayCompnent},
    { path :'Programe', component : EventComponent},
    { path : 'Gallery', component: SchoolGalleryComponent },
    { path : 'Student-List', component: StudentListComponent },
    { path : 'Student-Info', component: StudentInfoComponent },
    { path : "Login", component : LoginComponent}

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
    export const Components = [AppComponent, StudentComponent, NoticePostComponent, NoticeDisplayCompnent, LoginComponent, StudentInfoComponent, StudentListComponent, EventComponent, SchoolGalleryComponent]

    