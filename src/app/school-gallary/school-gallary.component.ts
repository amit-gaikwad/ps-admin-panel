import { Component } from '@angular/core';
import { ActivatedRoute,Params } from "@angular/router"
import { GallaryService } from'../service/gallary.service';

declare var AWS: any;

@Component({
  selector: 'app-school-gallery',
  templateUrl: './school-gallary.component.html',
  styleUrls: ['./school-gallary.component.css']
})
export class SchoolGalleryComponent{

  selectedImageId:number;
    eImage=[];
    nTitle:string;
    nDescription:string;
    nDate:Date;


  selectedFiles: FileList;
  eProg = [];
  SelectedProgId : number;

  constructor(private activatedRoute:ActivatedRoute, private noticeService:GallaryService )
  {
     activatedRoute.params.subscribe((params:Params)=>{
          this.selectedImageId=Number(params["nId"])
      });
      console.log("This is ID", this.selectedImageId);

      GallaryService.getAll().subscribe
      (
      (data)=>
              {
              this.eImage=data;
              var element=this.eImage.find((item)=>{
                  return (item.id==this.selectedImageId);
              })
              console.log(element);
              if(this.selectedImageId!=0 && this.selectedImageId!=null){
                  this.nTitle=element.title;
                  this.nDescription=element.description;
                  this.nDate=element.noticeDate;
              }
        }
      )
    }
    
  onImageFormSubmit(value : any)
  { 
    console.log(value);
    alert("Sucessfully uploaded");
  }
  
  }

 


