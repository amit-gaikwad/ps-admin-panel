import {Component} from "@angular/core";
import { Chart} from "angular-highcharts" ;
import { StudentService } from "../Services/student.service";
import { ActivatedRoute, Params } from "@angular/router";
import { StudentMarkService } from "../Services/studentmarks";
import { StudentMarks } from "../model/studentmarks";
@Component({
    selector : "bar-chart" ,
    templateUrl :  "./barchart-component.html" 

})
export class BarChartComponent {
  private type ="bar";
    chart : any;
  
     Physical = 50;
     Education = 30;
     Group = 20;
     Creativity = 80;
     Communication = 90;
     studentId="";
     studentMarks:StudentMarks;
     studmarks=[];
     constructor(private studentService: StudentService, private _ActivatedRoute: ActivatedRoute, private studentMarksService: StudentMarkService){
 
         
     
     }
     ngOnInit() {
         this._ActivatedRoute.params.subscribe(( parms :Params) =>{ this.studentId = parms["sId"];});
 
         if (this.studentId != undefined || this.studentId != null)
         {
             this.getMarks();
         }
         else
         {
         this.studentId = localStorage.getItem("sId");//find parent's student id and assign
         this.getMarks();
               }
               
     }
     getMarks()
     {
         this.studentMarksService.getAll().subscribe(data =>{
             console.log(this.studentId);
             
             data = data.filter((item) => {
                 return item.student_id === this.studentId;
             });
             console.log(data);
                  var studentLatestMarks=data.pop();
                  console.log(studentLatestMarks);
                      this.Physical=studentLatestMarks.phyicalactivity;
                      this.Group=studentLatestMarks.groupactivity;
                      this.Education=studentLatestMarks.educational;
                      this.Creativity=studentLatestMarks.creativity;
                      this.Communication=studentLatestMarks.communication;
                     this.loadChart();
                 }
                 
             )
         }

      loadChart(){
        this.chart=new Chart({
          chart: {
            type: this.type
          },
          title: {
            text: 'Student Skills (Bar Chart)'
          },
          
          xAxis: {
            categories: ['Physical', 'Education', 'Group', 'Creativity', 'Communication'],
                    },
          credits: {
            enabled: false
          },
          series : [{
            type : "bar",
            name : "Student Skills (Bar Chart)",
            data: [
                   ['Physical',   this.Physical],
                   ['Education',this.Education],
                   ['Group',    this.Group],
                   ['Creativity', this.Creativity],
                   ['Communication',  this.Communication]

             ]
         }]
        });
      }
  }