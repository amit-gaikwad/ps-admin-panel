import { Component, OnInit } from '@angular/core';

import {StudentService} from '../Services/student.service';
import {Student} from '../model/student';
import { Parent } from '../model/parent';
import { NgForm } from '@angular/forms';

declare var AWS: any;

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  sName = '';
  sRollNo = '';
  sAge = '';
  sClass = '';
  photourl = '';
  gender = 'male';
  classes = ['0-2 Years', '2-3 Years', '3+ Years'];
  selectedFiles: FileList;
  submitButton = '';
  isNotUploaded = true;
  isUploading = false;
  isSubmiting = false;
  pName='';
  pEmail='';
  paddress='';
  pMobile='';


  constructor(private studentService: StudentService ) {
  }

  ngOnInit() {}

  onlyDecimalNumberKey(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode !== 46 && charCode > 31
        && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

selectFile(event) {
  this.selectedFiles = event.target.files;
  console.log(this.selectedFiles.item(0));
}
onUpload (event) {

 // this.isUploaded = false;
    this.isUploading = true;
  const file = this.selectedFiles.item(0);
  //this.photourl = 'https://' + 's3-us-west-2.amazonaws.com/preschool-angular/' + file.name;
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
      s3.putObject(params, (err, res)=> {
          if (err) {
              console.log('Error uploading data: ', err);
              this.isUploading = false;
          } else {
            console.log('Successfully uploaded data' , res);
            this.isNotUploaded = false;
            this.photourl = "https://"+"s3-us-west-2.amazonaws.com/preschool-angular/"+file.name;
            this.isUploading = false;
          }
        });
    } else {
      console.log('Nothing to upload.');
      this.isUploading = false;
    }
  }

  onStudentFormSubmit(val: NgForm) {
    this.isSubmiting = true;
    console.log(this.photourl);
    const student = new Student();
    
  student.name = val.value.name;
  student.age = val.value.age;
  student.gender = val.value.gender;
  student.rollno = val.value.rollno;
  student.photourl = this.photourl;
  student.classteacher_id = '1'; // will be change later
  const parent=new Parent();

  parent.name=val.value.pname;
  parent.address=val.value.address;
  parent.email=val.value.email;
  parent.mobileno= +val.value.mobile;
  parent.password='';
  parent.student_ids=[];



  this.studentService.create(student,parent).subscribe(
      studentObj => {
        console.log('Student added successfully');
        console.log(studentObj);
        val.reset();
        this.isSubmiting = false;
        this.isNotUploaded = true;
      },
      error => {
        console.log(error);
        this.isSubmiting = false;
      }
  );
}

}

