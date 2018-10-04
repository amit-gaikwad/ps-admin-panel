 import {Component} from '@angular/core';
import { NoticeService } from '../Services/notice.service';
import { RouterModule , Routes, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-notice-display',
    templateUrl: './notice-display.component.html',
    styleUrls: ['./notice-display.component.css']
})
export class NoticeDisplayCompnent {
    eNotices = [];
    noticeId = 1;
    constructor(private noticeService: NoticeService, private router: Router, private auth : AuthService) {
        noticeService.getAll().subscribe((data) => {
                this.eNotices = data;
                }
        );
    }

    onUpdateClick(id: number) {
       // console.log(id);
      //  this.noticeId = id;
        //this.router.navigate(['NoticePost', { nId : this.noticeId }]);
    }
    onDeleteClick(id: number) {
        console.log(id);
    }
}
