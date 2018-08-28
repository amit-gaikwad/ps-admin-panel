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
     d=[1, 2, 3];
      constructor(){
        this.chart=new Chart({
          chart: {
            type: this.type
          },
          title: {
            text: 'line chart'
          },
          credits: {
            enabled: false
          },
          series: [
            {
              name: 'X axis',
              data: this.d
            }
          ]
        });
      }
      

           }
           
  

