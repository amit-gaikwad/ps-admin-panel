import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Services/student.service';
import { Student } from '../model/student';
import { StudentMarkService } from '../Services/studentmarks';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  student : Student   ;
  Physical = 0;
    Education = 0;
    Group = 0;
    Creativity = 0;
    Communication = 0;
  studentId = "" ;
  constructor(private studentMarksService: StudentMarkService, private studentService: StudentService, private _ActivatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    this._ActivatedRoute.params.subscribe(( parms :Params) =>{ this.studentId = parms["sId"];});

    if (this.studentId != undefined || this.studentId != null)
      {
       this.studentService.getById(this.studentId).subscribe((data) => {
        this.student = data;
        this.getMarks();
       });
      }else{
        this.studentId = localStorage.getItem("sId");//find parent's student id and assign
        this.studentService.getById(this.studentId).subscribe((data) => {
          this.student = data;
          this.getMarks();
         });
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
                }
                
            )
        }

        
}
