import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student';
@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  constructor( private studentService : StudentService ) { }
 private student : Student ;
 private sre : number = 50 ;
  ngOnInit() { 
    this.studentService.getStudent('assets/student.json').subscribe( data => {this.student = data[0] ; } );
  }
}