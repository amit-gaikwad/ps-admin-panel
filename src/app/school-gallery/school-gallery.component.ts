import { Component, OnInit } from '@angular/core';
import { GalleryService } from'../Services/gallery.service';
import { NgForm } from '@angular/forms';
import {Gallery} from '../model/gallery';
import { AppConstant } from '../constant/app.constant';
import { AuthService } from '../auth.service';

declare var AWS: any;

@Component({
  selector: 'app-school-gallery',
  templateUrl: './school-gallery.component.html',
  styleUrls: ['./school-gallery.component.css','../../assets/css/loading-animation.css']
})
export class SchoolGalleryComponent implements OnInit{

  selectedFiles: FileList;
  eProg = [];
  SelectedProgId : number;
  iCat="";
  category = ["Indoor","Outdoor","GD", "Babies","Monthly Activity","Special Event","Birthday","School Readlines"];
  isPrivate = "public";
  photourl = "";
  isNotUploaded = true;
  isUploading = false;
  isSubmiting = false;

    ngOnInit(){
    }  

  constructor(public galleryService: GalleryService, public auth : AuthService) { 
      galleryService.getAll().subscribe(
        (data)=>
        {
          this.eProg = data;
        }
     )
  }

  selectFile(event) {

    this.selectedFiles = event.target.files;
  }
  onUpload () { 
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
          Bucket: 'preschoolaus',
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
            // let num = Math.floor((Math.random() * 100000) + 1);
            this.photourl = AppConstant.awsPhotoUrl+file.name;
            this.isUploading = false;
          }
        });
    } else {
      console.log('Nothing to upload.');
      this.isUploading = false;
    }
  }

  onSubmit(form : NgForm){
    this.isSubmiting = true;
    const gallery = new Gallery();
    gallery.category = form.value.category.toLocaleLowerCase().replace(" ","");
  
    gallery.img_url = this.photourl ;
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
