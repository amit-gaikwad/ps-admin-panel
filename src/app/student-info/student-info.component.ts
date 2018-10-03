import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Services/student.service';
import { Student } from '../model/student';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  student : Student   ;
  creativity = 50;
  communication = 70;
  groupActivity = 80;
  physicalActivity = 60;
  educationActivity = 70;
  studentId = "" ;
  constructor(private studentService: StudentService, private _ActivatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    this._ActivatedRoute.params.subscribe(( parms :Params) =>{ this.studentId = parms["sId"];});

    if (this.studentId != undefined || this.studentId != null)
      {
       this.studentService.getById(this.studentId).subscribe((data) => {
        this.student = data;
       });
      }else{
        this.studentId = localStorage.getItem("sId");//find parent's student id and assign
        this.studentService.getById(this.studentId).subscribe((data) => {
          this.student = data;
         });
      }
  }
}
