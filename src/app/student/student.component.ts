import { Component, OnInit } from '@angular/core';

import {StudentService} from '../Services/student.service';
import {Student} from '../model/student'

declare var AWS: any;

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
  isUploaded = true;
  photourl = "";
  gender = "male";
  classes = ["0-2 Years","2-3 Years","3+ Years"];
  selectedFiles: FileList;
  submitButton = "";


  constructor(private studentService : StudentService ) { 
  }
  
  ngOnInit() {}

  onlyDecimalNumberKey(event) {
    let charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

selectFile(event) {
  this.selectedFiles = event.target.files;
  console.log(this.selectedFiles.item(0));
}
onUpload (event) {
 
  this.isUploaded = false;

  const file = this.selectedFiles.item(0);
  this.photourl = "https://"+"s3-us-west-2.amazonaws.com/preschool-angular/"+file.name;
  if (file) {
      AWS.config.update({
          'accessKeyId': 'AKIAILGGQK25JKQI6Q5A',
          'secretAccessKey': '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',
          'region': 'us-west-2'
      });
      const s3 = new AWS.S3();
      const params = {
          Bucket: 'preschool-angular',
          Key: file.name,
          ContentType: file.type,
          Body: file,
          ACL: 'public-read'
      };
      s3.putObject(params, function (err, res) {
          if (err) {
              console.log('Error uploading data: ', err);
          } else {
            console.log('Successfully uploaded data' , res);
          //  this.isUploaded = false;
            //this.photourl = "https://"+"s3-us-west-2.amazonaws.com/preschool-angular/"+file.name;
          }
        });
    } else {
      console.log('Nothing to upload.');
    }
  }

  onStudentFormSubmit(val : any)
  { 
    console.log(this.photourl);
    var student = new Student();
    student.name = val.name;
  student.age = val.age;
  student.gender = val.gender;
  student.rollno = val.rollno;
  student.photourl = this.photourl;
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
