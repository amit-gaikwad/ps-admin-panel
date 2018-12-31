import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Notice } from '../model/notice';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstant } from '../constant/app.constant';

@Injectable()
export class NoticeService {
    pdfDetails = [];
    private noticeUrl = "";
    constructor(private http: HttpClient) {
        this.noticeUrl = AppConstant.serverUrl + 'notice';
    }
    getAll(): Observable<any> {
        return this.http.get(this.noticeUrl).pipe((map((res: Response) => {
            return res;
        })));
    }

    getById(id: number): any {

        const element = this.pdfDetails.find((item) => {
            return (item.id === id);
        });
        return element || {};
    }
    create(notice: Notice): Observable<any> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };

        return this.http.post(this.noticeUrl, notice, httpOptions);
    }
    deleteById(id: any): Observable<any> {
        return this.http.delete(this.noticeUrl + '/' +id).pipe(map((res: Response) => res));
      }

}
