import { Http,Response } from '@angular/http' ;
import { map } from  'rxjs/operators'
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Student } from './student';
@Injectable(
    {
        providedIn: 'root'
    }
)
export class StudentService {
    
    constructor( private http : Http ) {}
     
    getStudent( url : string) : Observable<Student>
    {
      return this.http.get(url).pipe(map(response  => {  return response.json(); }));
    }
 
}