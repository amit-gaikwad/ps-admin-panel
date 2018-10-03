import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AppConstant } from '../constant/app.constant';

@Injectable()
export class AdminService {
     adminUrl= '';
    constructor(private http: HttpClient) {
      this.adminUrl = AppConstant.serverUrl + 'admin';
    }

  authenticate(user : any) : Observable<any>{
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.adminUrl+'/login', user, httpOptions);
  }

}
