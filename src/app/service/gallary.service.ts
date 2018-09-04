import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class GallaryService{    
  imageDetails = [];
  private schooljsonUrl="";
constructor(private http:Http){
    this.schooljsonUrl="http://localhost:4200/assets/schoolgallary.json";
}


getAll():Observable<any>
{
    return this.http.get(this.schooljsonUrl).pipe((map((res:Response)=>{
        return res.json();
    })));
}

getByID(id:number):any{
    
    var element=this.imageDetails.find((item)=>{
        return (item.id===id);
    })
   return element ||{};
}


}