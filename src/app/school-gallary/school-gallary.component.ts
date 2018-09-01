import { Component } from '@angular/core';
import { GallaryService } from '../school-gallary-service/gallaryservice';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';





@Component({
  selector: 'page-file-upload',
  templateUrl: './school-gallary.component.html',
  styleUrls: ['./school-gallary.component.css']
  
})
export class SchoolGallaryComponent {
  
  images = new Array() ;
  myFiles:string [] = [];
  sMsg:string = '';
  

  constructor(private galServices:GallaryService,private httpService: HttpClient){
    galServices.getAll().subscribe((data)=>{
      this.images = data;
      console.log("gthis is array",data);
    })
  }

    getFileDetails (e) {
      //console.log (e.target.files);
      for (var i = 0; i < e.target.files.length; i++) { 
        this.myFiles.push(e.target.files[i]);
      }
    }
  
    uploadFiles () {
      const frmData = new FormData();
      
      for (var i = 0; i < this.myFiles.length; i++) { 
        frmData.append("fileUpload", this.myFiles[i]);
      }
      
      this.httpService.post('http://localhost:60505/api/fileupload/', frmData).subscribe(
        data => {
          // SHOW A MESSAGE RECEIVED FROM THE WEB API.
       //   this.sMsg = data as string;
          console.log (this.sMsg);
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);    // SHOW ERRORS IF ANY.
        }
      );
    }

  

  
  
}
