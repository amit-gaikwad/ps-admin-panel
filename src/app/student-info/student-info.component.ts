import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Services/student.service';
import { Student } from '../model/student';
@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  student : Student ;
  creativity=50;
  communication=70;
  groupActivity=80;
  physicalActivity=60;
  educationActivity=70;
  
  constructor( private studentService : StudentService ) { }
  


  ngOnInit() { 
    this.studentService.getAll().subscribe( data => {this.student = data[0];
      this.student.photourl = "https://s3-us-west-2.amazonaws.com/preschool-angular/laptop3.jpg";
      console.log(this.student.photourl);
    } );
    
  }
}
