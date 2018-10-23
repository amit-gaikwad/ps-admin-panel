import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Services/student.service'
import { StudentMarks } from '../model/studentmarks';
import { NgForm } from '@angular/forms';
import { Student } from '../model/student';

@Component({
  selector: 'app-upload-marks',
  templateUrl: './upload-marks.component.html',
  styleUrls: ['./upload-marks.component.css']
})
export class UploadMarksComponent implements OnInit {
  studentList = [];
  searchString = "";
  isHidden=true;
  studentId : number;
  studentname="";
  student : Student;
 
  constructor(private studentService : StudentService) { }

  ngOnInit() {
    this.studentService.getAll().subscribe(data => { 
      this.sortByName(data);
   });
  }

  onStudentMarksSubmit(val: NgForm){
    const studmarks = new StudentMarks;
    studmarks.communication=val.value.communication;
    studmarks.creativity=val.value.creativity;
    studmarks.educational=val.value.educational;
    studmarks.groupactivity=val.value.groupactivity;
    studmarks.phyicalactivity=val.value.physical;
    studmarks.student_id=this.studentId;
    studmarks.assesmentdate=new Date();

    console.log(studmarks);
    
  }
  onSelect(id){
    console.log(id + "_Selected ID");
    this.studentId=id;
    this.isHidden=true;
      var element = this.studentList.find((item) => {
        return (item.rollno == id);
        });
    this.searchString=element.name;
  }
  getBySerach(){
    this.isHidden=false;
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
  getName(rollno : any){
    

  }
}
