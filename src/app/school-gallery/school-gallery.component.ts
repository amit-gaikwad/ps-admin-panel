import { Component, OnInit } from '@angular/core';
import { GalleryService } from'../Services/gallery.service';

declare var AWS: any;

@Component({
  selector: 'app-school-gallery',
  templateUrl: './school-gallery.component.html',
  styleUrls: ['./school-gallery.component.css']
})
export class SchoolGalleryComponent{

  selectedFiles: FileList;
  eProg = [];
  SelectedProgId : number;
  iCat="";
  category=["School","Meal","Fun","Physical Activity"];
  constructor(private progService: GalleryService) { 
    console.log("construcot");
      progService.getAll().subscribe(
        (data)=>
        {
          console.log(data);
          this.eProg = data;
        }
     )
  }


  selectFile(event) {

    this.selectedFiles = event.target.files;
  }
  onUpload () { 
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
        s3.putObject(params, function (err, res) {
            if (err) {
                console.log('Error uploading data: ', err);
            } else {
              console.log('Successfully uploaded data');
            }
        });
    } else {
      console.log('Nothing to upload.');
    }
  }
  

}
