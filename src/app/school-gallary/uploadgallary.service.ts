import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
import {map } from 'rxjs/operators';


@Injectable()
export class FileUploadService {

    baseUrl = 'http://localhost:3001'; // our local Hapi Js API

    constructor(private _http: Http) { }

    
    }
