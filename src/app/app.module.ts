import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {  RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AppRouting,Components } from '../app.routing';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BarChartComponent } from './barchart/barchart-component';
import { PieChartComponent } from './pichart/piechart.-component';
import{ FormsModule} from '@angular/forms';
import { ChartModule} from 'angular-highcharts';
import { ChartsComponent } from './charts/charts.component';
import { NoticePostComponent} from './notice-post/notice-post.component';
import { NoticeDisplayCompnent } from "./notice-display/notice-display.component";
import { NoticeService } from "./Services/notice.service";
import { HttpModule} from "@angular/http";
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { NgxPaginationModule} from 'ngx-pagination';
import { StudentInfoComponent } from './student-info/student-info.component'
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from './Services/student.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PieChartComponent,
    BarChartComponent,
    ChartsComponent,
    NoticePostComponent,
    NoticeDisplayCompnent,
    SafeUrlPipe,
    StudentInfoComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    ChartModule,
    HttpModule,
    NgxPaginationModule,
    HttpClientModule
   
  ],
  providers: [ NoticeService,StudentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
