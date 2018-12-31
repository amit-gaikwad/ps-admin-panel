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
    p : any;
    constructor(private noticeService: NoticeService, private router: Router, private auth : AuthService) {
        noticeService.getAll().subscribe((data) => {
                this.eNotices = data;
                this.eNotices.reverse();
                }
        );
    }

    onUpdateClick(id: number) {
          }

    onDeleteClick(id: any) {
            if(confirm("Are you sure to delete ?")){
                console.log(id);
              this.noticeService.deleteById(id).subscribe(data => { 
                window.location.reload();
               });
        
            
    }
}
}
