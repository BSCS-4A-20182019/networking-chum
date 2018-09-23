import { Injectable } from '@angular/core';
import { Observable, Promise } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }

    getFile(url: string): Promise<any> {
        return this.http.get(url);
    }
}
