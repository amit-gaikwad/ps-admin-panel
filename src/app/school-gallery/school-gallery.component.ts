import { Component, OnInit } from '@angular/core';
import { GalleryService } from'../Services/gallery.service';
import { NgForm } from '@angular/forms';
import {Gallery} from '../model/gallery';

declare var AWS: any;

@Component({
  selector: 'app-school-gallery',
  templateUrl: './school-gallery.component.html',
  styleUrls: ['./school-gallery.component.css','../../assets/css/loading-animation.css']
})
export class SchoolGalleryComponent{

  selectedFiles: FileList;
  eProg = [];
  SelectedProgId : number;
  iCat="";
  category = ["Indoor","Outdoor","GD", "Babies","Monthly Activity","Special Event","Birthday","School Readlines"];
  isPrivate = "public";
  isNotUploaded = true;
  isUploading = false;
  isSubmiting = false;

  constructor(private galleryService: GalleryService) { 
    // console.log("construcot");
    //   progService.getAll().subscribe(
    //     (data)=>
    //     {
    //       console.log(data);
    //       this.eProg = data;
    //     }
    //  )
  }

  selectFile(event) {

    this.selectedFiles = event.target.files;
  }
  onUpload () { 
    this.isUploading = true;
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
        s3.putObject(params, (err, res) => {
            if (err) {
                console.log('Error uploading data: ', err);
                this.isUploading = false;
            } else {
              console.log('Successfully uploaded data');
              this.isUploading = false;
              this.isNotUploaded = false;
            }
        });
    } else {
      console.log('Nothing to upload.');
    }
  }

  onSubmit(form : NgForm){
    this.isSubmiting = true;
    const gallery = new Gallery();
    gallery.category = form.value.category;
    gallery.img_url = form.value.img_url;
    if(this.isPrivate == 'public'){
      gallery.isPrivate  = false;
    }else{
      gallery.isPrivate = true;
    }
    this.galleryService.create(gallery).subscribe(
      galleryObj =>{
        console.log('Student added successfully');
        form.reset();
        this.isPrivate = 'public';
        this.isSubmiting = false;
        this.isNotUploaded = true;
      },
      error => {
        console.log(error);
        this.isSubmiting = false;
      }
    )
  }
}
