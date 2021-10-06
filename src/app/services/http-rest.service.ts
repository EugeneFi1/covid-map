import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { TotalNumberResponse } from "../models/total-number-response.model";

@Injectable({
    providedIn: 'root'
})
export class HttpRestService {
    constructor(private http: HttpClient) {
    }

    public loadUkraineTotalNumber(): Observable<TotalNumberResponse> {
        return this.http.get<TotalNumberResponse>('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total', {
            headers: {
                'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
    'x-rapidapi-key': '7a10d044c8msh56d11ca80bc749fp1304b6jsnad7ff977ec49'
            },
            params: {
                country: 'Ukraine'
            }
        })
    }
}