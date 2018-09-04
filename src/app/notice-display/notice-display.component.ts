 import {Component} from "@angular/core";
import { NoticeService } from "../Services/notice.service";
import { RouterModule , Routes, Router } from '@angular/router';

@Component({
    selector:"app-notice-display",
    templateUrl:"./notice-display.component.html",
    styleUrls:["./notice-display.component.css"]
})
export class NoticeDisplayCompnent{
    eNotices=[];
    noticeId=1;
    constructor(private noticeService:NoticeService, private router:Router)
    {
        noticeService.getAll().subscribe
        (
        (data)=>
                {
                this.eNotices=data;
                }
        )
    }

    onUpdateClick(id:number)
    {
       // console.log(id);
        this.noticeId=id;
        this.router.navigate(["NoticePost", { nId : this.noticeId }])
    }
    onDeleteClick(id:number){
        console.log(id);
    }
}