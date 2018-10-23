import {  Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AppConstant } from '../constant/app.constant';
import { StudentMarks } from '../model/studentmarks';

@Injectable()
export class StudentMarkService {
    studentMark= '';
    constructor(private http: HttpClient) {
      //this.studentMark = AppConstant.serverUrl + 'studentmark';
      this.studentMark="http://loacalhost:4200/assets/studentmarks.json"
    }


 getAll(): Observable<any> {
   return  this.http.get(this.studentMark).pipe(map((res: Response) => res));
 }
  // for student Marks
 create(studentmark: StudentMarks): Observable<any> {

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  var studMarkDetails={studentmark};
  return this.http.post(this.studentMark, httpOptions);
 }

/*  getById(ids : any ): Observable<any>
 {
   return this.http.get(this.studentMark+'/'+ids).pipe(map((res:Response) => res)); 
} */
}
