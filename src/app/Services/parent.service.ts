import {  Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AppConstant } from '../constant/app.constant';

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

  authenticate(user : any) : Observable<any>{
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.parentUrl+'/login', user, httpOptions);
  }

}
