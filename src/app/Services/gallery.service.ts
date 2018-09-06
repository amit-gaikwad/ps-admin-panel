import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { AppConstant } from '../constant/app.constant';

@Injectable()
export class GalleryService {
    private galleryUrl = '';

    constructor(private http: Http) {
        this.galleryUrl = AppConstant.serverUrl + 'gallery';
    }

    getAll(): Observable<any> {

        return this.http.get(this.galleryUrl).pipe((map((res: Response) => {
            return res.json();
        })));

    }
}
