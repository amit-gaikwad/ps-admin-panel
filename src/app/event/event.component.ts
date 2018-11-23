import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../Services/programe.service';
import { NgForm } from '@angular/forms';
import { Event } from '../model/event';
import { AppConstant } from '../constant/app.constant';
declare var AWS: any;

@Component({
  selector: 'app-progrmme',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css','../../assets/css/loading-animation.css']
})
export class EventComponent {

  selectedFiles: FileList;
  eProg = [];
  SelectedProgId: number;
  isNotUploaded = true;
  isUploading = false;
  isSubmiting = false;
  pdfUrl = ''; 

  constructor(private progService: ProgramService) {}
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  
  onUpload (value: any) {
     
    console.log('up load fun ', value);
    this.isUploading = true ;
    const file = this.selectedFiles.item(0);
    if (file) {
        AWS.config.update({
          'accessKeyId': AppConstant.awsAccessKeyId,
          'secretAccessKey': AppConstant.awsSecretAccessKey,
          'region': AppConstant.awsRegion
        });
        const s3 = new AWS.S3();
        const params = {
            Bucket: 'preschoolaus',
            Key: file.name,
            ContentType: file.type,
            Body: file,
            ACL: 'public-read'

        };
        s3.putObject(params,  (err, res) => {
            if (err) {
                console.log('Error uploading data: ', err);
                this.isUploading = false;
            } else {
              this.isNotUploaded = false;
              this.isUploading = false;

              this.pdfUrl =AppConstant.awsPhotoUrl+file.name;
            }
        });
    } else {
      console.log('Nothing to upload.');
      this.isUploading = false;
    }
  }
  onProgramSubmit(event:NgForm) {
    this.isSubmiting = true;
    const events = new Event();
    events.title = event.value.title ; 
    events.description =  event.value.description ;
    events.date = new Date();
    events.imgurl =  this.pdfUrl ;
    this.progService.create(events).subscribe(
      studentObj => {
        this.isNotUploaded = true;
        event.reset();
        this.isSubmiting = false;
      },
      error => {
        console.log(error);
        this.isSubmiting = false;
      }
  );
  }

}

