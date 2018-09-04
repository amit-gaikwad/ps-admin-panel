import {  Injectable } from '@angular/core';
import { Http,Response, RequestMethod, RequestOptions} from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AppConstant } from '../constant/app.constant';

@Injectable()
export class StudentService 
{

    constructor(private http:Http){}
    
 getAll() : Observable<any>
 {
   return  this.http.get('http://192.168.0.113:5000/notice').pipe(map((res:Response) => { return res.json();}));
 }
 getBySerach(stringSerach:String):Observable<any>
 {
    return  this.http.get('http://192.168.0.113:5000/notice')
    .pipe(map((res:Response) => {
         var element = res.json() ;
          element = element.filter((result)=>{
             return (result.name == stringSerach)
            });
        }));
 }

}