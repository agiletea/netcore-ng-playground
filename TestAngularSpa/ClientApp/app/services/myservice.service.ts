import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { IMyData } from "../dtos/mydata.dto";

@Injectable()
export class MyService {
    constructor(private httpClient: HttpClient) { }

    getMyData(): Observable<IMyData[]> {
        return this.httpClient.get<IMyData[]>("api/mydata");
    }
}