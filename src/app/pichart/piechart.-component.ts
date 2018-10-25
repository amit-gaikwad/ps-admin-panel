import {Component} from "@angular/core";
import { Chart } from "angular-highcharts";
import { StudentService } from '../Services/student.service';
import { StudentMarkService } from '../Services/studentmarks';
import { Student } from '../model/student';
import { StudentMarks } from '../model/studentmarks';
import { ActivatedRoute, Params } from '@angular/router';
@Component({

    selector: "pie-chart",
    templateUrl : "./piechart-component.html"
})

export class PieChartComponent{
    chart : any;
    Physical = 0;
    Education = 0;
    Group = 0;
    Creativity = 0;
    Communication = 0;
    studentId="";
    student : Student   ;
    studentMarks:StudentMarks;
    studmarks=[];
    constructor(private studentService: StudentService, private _ActivatedRoute: ActivatedRoute, private studentMarksService: StudentMarkService){

        
    
    }
    ngOnInit() {
        this._ActivatedRoute.params.subscribe(( parms :Params) =>{ this.studentId = parms["sId"];});

        if (this.studentId != undefined || this.studentId != null)
        {
            this.getMarks();
        }else{
        this.studentId = localStorage.getItem("sId");//find parent's student id and assign
        this.getMarks();
              }
              this.chart = new Chart({
  
                chart : {
                        type: "pie",
                        plotBackgroundColor : null,
                        plotBorderWidth : null,
                        plotShadow : false
                     },
                title : {
                          text : "Pie Chart "
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
                                            format : "{point.name}: {point.y: .1f%} ",
                                            style : {
                                                  color : "blue" 
                                              }
                          
                                          }
                                      }
                              },
                              credits: {
                                  enabled: false
                                },
                series : [{
                         type : "pie",
                         name : "pie chart ",
                         data: [
                                {
                                 name: 'Chrome',
                                 y: 12.8,
                                 sliced: false,
                                 selected: true
                                },
                                ['Physical',   this.Physical],
                                ['Education',this.Education],
                                ['Group',    this.Group],
                                ['Creativity', this.Creativity],
                                ['Communication',  this.Communication]
        
                          ]
                      }]
              
              });
    }
    getMarks()
    {
        this.studentMarksService.getAll().subscribe(data  => {
                data = data.filter((item) => {
                     return (item._id == this.studentId);
                 })
                 console.log(data);
                 var studentLatestMarks=data.pop();
                     this.Physical=studentLatestMarks.phyicalactivity;
                     this.Group=studentLatestMarks.groupactivity;
                     this.Education=studentLatestMarks.educational;
                     this.Creativity=studentLatestMarks.creativity;
                     this.Communication=studentLatestMarks.communication;

                }
                
            )
        }
    }
