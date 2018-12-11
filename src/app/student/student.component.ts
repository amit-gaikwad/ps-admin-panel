import { Component, OnInit } from '@angular/core';

import {StudentService} from '../Services/student.service';
import {Student} from '../model/student';
import { Parent } from '../model/parent';
import { NgForm } from '@angular/forms';
import { ParentService } from '../Services/parent.service';
import { AppConstant } from '../constant/app.constant';

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
  success = false;

  
  studentDetails = [];

  constructor(private studentService: StudentService) {
    

  }

  ngOnInit() {
  //   this.parentService.getAll().subscribe(data => { 
  //     this.studentDetails = data.map(item => item.email) ;
  //     console.log(this.studentDetails);
  //  });
  }

  // isExistEmail(){
  //    return this.studentDetails.includes(this.pEmail);
  // }

selectFile(event) {
  this.selectedFiles = event.target.files;
  console.log(this.selectedFiles.item(0));
}
onUpload (event) {

    this.isUploading = true;
  const file = this.selectedFiles.item(0);

  if (file) {
      AWS.config.update({
        'accessKeyId': AppConstant.awsAccessKeyId,
        'secretAccessKey': AppConstant.awsSecretAccessKey,
        'region': AppConstant.awsRegion
      });
      const s3 = new AWS.S3();
      const params = {
          Bucket: AppConstant.bucketName,
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
            this.photourl = AppConstant.awsPhotoUrl+file.name;
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
  student.classteacher_id = val.value.class;
  const parent=new Parent();

  parent.name=val.value.pname;
  parent.address=val.value.address;
  parent.email=val.value.email;
  parent.mobileno= +val.value.mobile;
  parent.password='';
  parent.student_ids=[];



  this.studentService.create(student,parent).subscribe(
      studentObj => {
        this.success = true;
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

