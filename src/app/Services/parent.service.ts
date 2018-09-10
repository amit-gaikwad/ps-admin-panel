import {  Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Student} from '../model/student';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AppConstant } from '../constant/app.constant';
import { Parent } from '../model/parent';

@Injectable()
export class ParentService {
     parentUrl= '';
    constructor(private http: HttpClient) {
      this.parentUrl = AppConstant.serverUrl + 'parent';
    }


 getAll(): Observable<any> {
   return  this.http.get(this.parentUrl).pipe(map((res: Response) => res));
 }
 
 getById(id : any ): Observable<any>
 {
   return this.http.get(this.parentUrl+'/'+id).pipe(map((res:Response) => res)); 
}
}
