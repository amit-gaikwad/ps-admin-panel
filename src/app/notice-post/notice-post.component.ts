import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NoticeService } from "../Services/notice.service";
import { Notice } from '../model/notice';

@Component({
    selector: "app-notice-post",
    templateUrl: "./notice-post.component.html",
    styleUrls: ["./notice-post.component.css"]
})
export class NoticePostComponent {
    selectedNoticeId: number;
    eNotices = [];
    nTitle='';
    nDescription='';
    nDate: Date;
    nClass='';
    classes = ["0-2 Years", "2-3 Years", "3+ Years"];
    constructor(private activatedRoute: ActivatedRoute, private noticeService: NoticeService) {
        // activatedRoute.params.subscribe((params: Params) => {
        //     this.selectedNoticeId = Number(params["nId"])
        // });
        // console.log("This is ID", this.selectedNoticeId);

        // noticeService.getAll().subscribe
        //     (
        //     (data) => {
        //         this.eNotices = data;
        //         var element = this.eNotices.find((item) => {
        //             return (item.id == this.selectedNoticeId);
        //         })
        //         console.log(element);
        //         if (this.selectedNoticeId != 0 && this.selectedNoticeId != null) {
        //             this.nTitle = element.title;
        //             this.nDescription = element.description;
        //             this.nDate = element.noticeDate;
        //             this.nClass = element.noticeClass;




        //         }
        //     }
        //     )
    }

    onNoticeFormSubmit(value: any) {
        console.log(value);
        var notice = new Notice();
        notice.title = value.title;
        notice.description =  value.description ;
        notice.date = new Date() ;
        notice.class = value.class ;
        this.noticeService.create(notice).subscribe(
            student => {
              console.log("Notice added successfully");
            },
            error => {
              console.log(error);
            }
        );
    }
    OnChange(value: any) {
        ;
    }

  
}