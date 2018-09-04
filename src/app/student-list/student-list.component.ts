import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Services/student.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 
  StudentList = [];
  searchString = "";
  constructor( private studentService : StudentService) { }
 
  ngOnInit() {
    this.studentService.getAll().subscribe(data => { this.StudentList = data; console.log(data)});
  }
  show(i:any)
  {
    console.log(i);
  }
  
 
}
