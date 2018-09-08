import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../Services/programe.service';
import { NgForm } from '@angular/forms';
import { Event } from '../model/event';
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

  constructor(private progService: ProgramService) {

    //   progService.getAll().subscribe(
    //     (data) => {
    //       console.log(data);
    //       this.eProg = data;
    //     }
    //  );
  }


  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  onUpload (value: any) {
     
    console.log('up load fun ', value);
    this.isUploading = true ;
    const file = this.selectedFiles.item(0);
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
        s3.putObject(params,  (err, res) => {
            if (err) {
                console.log('Error uploading data: ', err);
                this.isUploading = false;
            } else {
              this.isNotUploaded = false;
              this.isUploading = false;

              this.pdfUrl = "https://"+"s3-us-west-2.amazonaws.com/preschool-angular/"+file.name;
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

