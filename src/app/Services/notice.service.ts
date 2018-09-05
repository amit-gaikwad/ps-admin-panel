import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Notice } from '../model/notice';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstant } from '../constant/app.constant';

@Injectable()
export class NoticeService {
    pdfDetails = [];
    private jsonUrl = "";
    constructor(private http: HttpClient) {
        this.jsonUrl = "http://localhost:4200/assets/notice.json";
    }


    getAll(): Observable<any> {
        return this.http.get(this.jsonUrl).pipe((map((res: Response) => {
            return res.json();
        })));
    }

    getByID(id: number): any {

        var element = this.pdfDetails.find((item) => {
            return (item.id === id);
        })
        return element || {};
    }
    create(notice: Notice): Observable<any> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };

        return this.http.post(AppConstant.servarUrl+'notice', notice, httpOptions);
    }

}
