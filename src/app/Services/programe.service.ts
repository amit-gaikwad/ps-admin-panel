import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { AppConstant } from '../constant/app.constant';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Event } from '../model/event';
@Injectable()
export class ProgramService {
    private jsonUrl = '';
 
    constructor(private http: HttpClient) {
        this.jsonUrl = AppConstant.serverUrl + 'event';
    }
    getAll(): Observable<any> {

        return this.http.get(this.jsonUrl).pipe((map((res: Response) => {
        return res.json();
        })));

    }

    create(event: Event): Observable<any> {

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };
      
        return this.http.post(AppConstant.serverUrl+'event', event, httpOptions);
       }
}
