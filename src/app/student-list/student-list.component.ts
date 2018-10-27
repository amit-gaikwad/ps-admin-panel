import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Services/student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 
  p : any;
  studentList = [];
  searchString = "";
  constructor( private studentService : StudentService, private _router : Router) { 
     }
 
  ngOnInit() {
    this.studentService.getAll().subscribe(data => { 
       this.sortByName(data);
    });
  }
  getBySerach(){
    this.studentService.getAll().subscribe(data =>{
          this.sortByName(data);
        if(this.searchString.trim()){
          var tempData = this.studentList.filter(item =>{
            return (item.name.toLocaleLowerCase().includes(this.searchString.trim().toLocaleLowerCase()));
          });
          this.sortByName(tempData);

        }else{
          this.sortByName(data);
        }
    }
    );
  }

  sortByName(students : any[]) {
    this.studentList = students.sort((a , b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
     });
  }

  navigateToInfo(id:any)
  { 
    console.log("evet  is clicked ...");
     this._router.navigate(['studentinfo',{sId:id}]);
  }
  
}
