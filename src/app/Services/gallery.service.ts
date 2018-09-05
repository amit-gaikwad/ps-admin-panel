import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class GalleryService {
    private jsonUrl = '';

    constructor(private http:Http) {
        this.jsonUrl = 'http://localhost:4200/assets/gallery.json';
    }
    
    getAll():Observable<any> {
        
        return this.http.get(this.jsonUrl).pipe((map((res: Response) => {
            console.log("this is ");
            return res.json();
        })));

    }
}
