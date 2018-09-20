import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { AppConstant } from '../constant/app.constant';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Gallery } from '../model/gallery';

@Injectable()
export class GalleryService {
    private galleryUrl = '';

    constructor(private http: HttpClient) {
        this.galleryUrl = AppConstant.serverUrl + 'gallery';
    }

    getAll(): Observable<any> {

        return this.http.get(this.galleryUrl).pipe((map((res: Response) => {
            return res;
        })));

    }

    create(gallery : Gallery): Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
        return this.http.post(this.galleryUrl,gallery,httpOptions);
    }
}
