import { Injectable } from "@angular/core";
import { Http,Response} from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";



@Injectable()
export class NoticeService{
pdfDetails = [];
private jsonUrl="";
constructor(private http:Http){
this.jsonUrl="http://localhost:4200/assets/notice.json";
}


getAll():Observable<any>
{
    return this.http.get(this.jsonUrl).pipe((map((res:Response)=>{
        return res.json();
    })));
}

getByID(id:number):any{
    
    var element=this.pdfDetails.find((item)=>{
        return (item.id===id);
    })
   return element ||{};
}


}
