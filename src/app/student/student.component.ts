import { Component, OnInit } from '@angular/core';

import {StudentService} from '../Services/student.service';
import {Student} from '../model/student'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  sName = "";
  sRollNo = "";
  sAge = "";
  sClass="";
  gender = "male";
  classes = ["0-2 Years","2-3 Years","3+ Years"];

  constructor(private studentService : StudentService ) { }
  
  ngOnInit() {}

  onlyDecimalNumberKey(event) {
    let charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

onStudentFormSubmit(val : any)
{ 
  var student = new Student();
  student.name = val.name;
  student.age = val.age;
  student.gender = val.gender;
  student.rollno = val.rollno
  student.classteacher_id = "1"; //will be change later
  this.studentService.create(student).subscribe(
      student => {
        console.log("Student added successfully");
      },
      error => {
        console.log(error);
      }
  );

}

}
