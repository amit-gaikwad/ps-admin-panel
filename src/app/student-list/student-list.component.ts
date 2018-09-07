import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Services/student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 
  studentList = [];
  searchString = "";
  constructor( private studentService : StudentService, private _router : Router) { 
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

  navigateToInfo(id:any)
  { 
    console.log("evet  is clicked ...");
     this._router.navigate(['Student-Info',{sId:id}]);
  }
  
}
