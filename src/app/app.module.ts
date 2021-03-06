import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {  RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AppRouting,Components } from './../app.routing';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BarChartComponent } from './barchart/barchart-component';
import { PieChartComponent } from './pichart/piechart.-component';
import{ FormsModule} from '@angular/forms';
import { ChartModule} from 'angular-highcharts';
import { ChartsComponent } from './charts/charts.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PieChartComponent,
    BarChartComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
