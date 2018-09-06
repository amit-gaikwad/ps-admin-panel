import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../Services/programe.service';
import { NgForm } from '@angular/forms';
import { Event } from '../model/event';
declare var AWS: any;


@Component({
  selector: 'app-progrmme',
  templateUrl: './progrmme.component.html',
  styleUrls: ['./progrmme.component.css']
})

export class ProgrmmeComponent {

  selectedFiles: FileList;
  eProg = [];
  SelectedProgId: number;
  isNotUploaded = true;
  isUploading = false;
  photourl = ''; 

  constructor(private progService: ProgramService) {

      progService.getAll().subscribe(
        (data) => {
          console.log(data);
          this.eProg = data;
        }
     );
  }


  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  onUpload (value: any) {
     debugger
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
              console.log('Successfully uploaded data');
              this.isUploading = false;
              this.photourl = "https://"+"s3-us-west-2.amazonaws.com/preschool-angular/"+file.name;
            }
        });
    } else {
      console.log('Nothing to upload.');
      this.isUploading = false;
    }
  }
  onProgramSubmit(event:NgForm) {
    console.log(event.value);
    const events = new Event();
    events.title = event.value.title ; 
    events.description =  event.value.description ;
    events.date = new Date();
    events.imageurl =  this.photourl ;
    console.log(events);
    this.progService.create(events).subscribe(
      studentObj => {
        console.log('Programme added successfully');
        this.isNotUploaded = true;
        event.reset();
      },
      error => {
        console.log(error);
      }
  );
  }

}

