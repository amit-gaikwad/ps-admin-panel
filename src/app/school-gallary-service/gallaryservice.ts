import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";



@Injectable()
export class GallaryService{
    
    constructor(private htpp:Http){

    }

    getAll():Observable<any>{
        return this.htpp.get("http://localhost:4200/assets/schoolgallary.json").pipe(
            map((res:Response)=>{
                return res.json();
            })
        )

    }

}