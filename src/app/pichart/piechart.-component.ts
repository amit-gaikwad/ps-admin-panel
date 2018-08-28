import {Component} from "@angular/core";
import { Chart } from "angular-highcharts";
@Component({

    selector: "pie-chart",
    templateUrl : "./piechart-component.html"
})

export class PieChartComponent{
    chart : any;
    constructor(){

        this.chart = new Chart({
  
          chart : {
                  type: "pie",
                  plotBackgroundColor : null,
                  plotBorderWidth : null,
                  plotShadow : false
               },
          title : {
                    text : "Pie Chart Example Demo"
              },
          tooltip :{
                      pointFormat : '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
          plotOptions : {
                           pie :{
                                 allowPointSelect : true,
                                 cursor : "pointer",
                                 dataLabels : {
                                      enabled : true,
                                      format : "<b>{point.name}%</b>: {point.percentage:.1f} %",
                                      style : {
                                            color : "black" 
                                        }
                    
                                    }
                                }
                        },
          series : [{
                   type : "pie",
                   name : "pie chart Example",
                   data: [
                          {
                           name: 'Chrome',
                           y: 12.8,
                           sliced: false,
                           selected: true
                          },
                        ['Firefox',   45.0],
                        ['IE',       26.8],
                        ['Safari',    8.5],
                        ['Opera',     6.2],
                        ['Others',   0.7]
                    ]
                }]
        
        });
    
    }
}
