import {  Injectable } from '@angular/core';
import { Http,Response, RequestMethod, RequestOptions} from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AppConstant } from '../constant/app.constant';

@Injectable()
export class StudentService 
{
   url = AppConstant.url ;
    constructor(private http:Http){}
    
 getAll() : Observable<any>
 {
   return  this.http.get(this.url+'/students').pipe(map((res:Response) => { return res.json();}));
 }
 getBySerach(stringSerach:String):Observable<any>
 {
    return  this.http.get(this.url+'/students')
    .pipe(map((res:Response) => {
         var element = res.json() ;
          element = element.filter((result)=>{
             return (result.name == stringSerach)
            });
        }));
 }
 postStudent(body:any)
 {
     this.http.post(this.url+'/student',body)
     .pipe((map(res =>{ res.json();})));
 }

}