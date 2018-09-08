import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Services/student.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 
  studentList = [];
  searchString = "";
  constructor( private studentService : StudentService) { 
     }
 
  ngOnInit() {
    this.studentService.getAll().subscribe(data => { 
       this.studentList = data;
    });
  }
  getBySerach(){
    this.studentService.getAll().subscribe(data =>{
        this.studentList = data;
        if(this.searchString){
          this.studentList = this.studentList.filter(item =>{
            return (item.name.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()));
          });
        }else{
          this.studentList = data;

        }
    }
    );
  }
  
}
