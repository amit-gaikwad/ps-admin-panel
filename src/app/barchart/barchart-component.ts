import {Component} from "@angular/core";
import { Chart} from "angular-highcharts" ;
import { ChartModule } from "angular-highcharts" ;
@Component({
    selector : "bar-chart" ,
    templateUrl :  "./barchart-component.html" 

})
export class BarChartComponent {
  private type ="bar";
    chart : any;
     d=[1,2,3,4,5];
     
      constructor(){
        this.chart=new Chart({
          chart: {
            type: this.type
          },
          title: {
            text: 'Line Chart'
          },
          credits: {
            enabled: false
          },
          series: [
            {
              name: 'Data',
              data: this.d
            }
          ]
        });
      }
  }