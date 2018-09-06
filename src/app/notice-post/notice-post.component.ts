import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NoticeService } from "../Services/notice.service";
import { Notice } from '../model/notice';
import { NgForm } from "@angular/forms";

@Component({
    selector: "app-notice-post",
    templateUrl: "./notice-post.component.html",
    styleUrls: ["./notice-post.component.css","../../assets/css/loading-animation.css"]
})
export class NoticePostComponent {
    selectedNoticeId: number;
    eNotices = [];
    nTitle='';
    nDescription='';
    nDate: Date;
    nClass='';
    classes = ["0-2 Years", "2-3 Years", "3+ Years"];
    isSubmiting = false;
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

    onNoticeFormSubmit(form: NgForm) {
        this.isSubmiting = true;
        console.log(form);
        var notice = new Notice();
        notice.title = form.value.title;
        notice.description =  form.value.description ;
        notice.date = new Date() ;
        notice.class = form.value.class ;
        this.noticeService.create(notice).subscribe(
            student => {
              console.log("Notice added successfully");
              form.reset();
              this.isSubmiting = false;
            },
            error => {
              console.log(error);
              this.isSubmiting = false;

            }
        );
    }
    OnChange(value: any) {
        ;
    }

  
}