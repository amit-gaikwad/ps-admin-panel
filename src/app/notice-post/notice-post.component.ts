import { Component } from "@angular/core";
import { Router,ActivatedRoute,Params } from "@angular/router";
import { NoticeService } from "../Services/notice.service";


@Component({
    selector:"app-notice-post",
    templateUrl:"./notice-post.component.html",
    styleUrls:["./notice-post.component.css"]
})
export class NoticePostComponent{
    selectedNoticeId:number;
    eNotices=[];
    nTitle:string;
    nDescription:string;
    nDate:Date;
    nClass:string;
    classes = ["0-2 Years","2-3 Years","3+ Years"];
    constructor(private activatedRoute:ActivatedRoute, private noticeService:NoticeService )
    {
       activatedRoute.params.subscribe((params:Params)=>{
            this.selectedNoticeId=Number(params["nId"])
        });
        console.log("This is ID", this.selectedNoticeId);

        noticeService.getAll().subscribe
        (
        (data)=>
                {
                this.eNotices=data;
                var element=this.eNotices.find((item)=>{
                    return (item.id==this.selectedNoticeId);
                })
                console.log(element);
                if(this.selectedNoticeId!=0 && this.selectedNoticeId!=null){
                    this.nTitle=element.title;
                    this.nDescription=element.description;
                    this.nDate=element.noticeDate;
                    this.nClass= element.noticeClass;
            
            

          
                }
                }
        )
    }
    
    

    onNoticeFormSubmit(value:any){
        console.log(value);
        alert("Notice Posted Sucessfully")
    }
    OnChange(value:any)
    {
        debugger;
    }
}