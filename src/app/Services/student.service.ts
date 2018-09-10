import {  Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Student} from '../model/student';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AppConstant } from '../constant/app.constant';
import { Parent } from '../model/parent';

@Injectable()
export class StudentService {
     studentUrl= '';
    constructor(private http: HttpClient) {
      this.studentUrl = AppConstant.serverUrl + 'student';
    }


 getAll(): Observable<any> {
   return  this.http.get(this.studentUrl).pipe(map((res: Response) => res));
 }
  // for student registration
 create(student: Student,parent:Parent): Observable<any> {

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  return this.http.post(this.studentUrl, student, httpOptions);
 }

 getById(ids : any ): Observable<any>
 {
   return this.http.get(this.studentUrl+'/'+ids).pipe(map((res:Response) => res)); 
}
}
