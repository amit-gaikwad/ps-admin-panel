import {  Injectable } from '@angular/core';
import { Response} from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {Student} from '../model/student';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { AppConstant } from '../constant/app.constant';

@Injectable()
export class StudentService 
{
    constructor(private http:HttpClient){}
    
 getAll() : Observable<any>
 {
   return  this.http.get(AppConstant.studentUrl).pipe(map((res:Response) => { return res;}));
 }
  //for student registration
 create(student : Student) : Observable<any>{
  
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  return this.http.post(AppConstant.studentUrl,student,httpOptions);
 }
}