import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = "/api/endpoint";
  constructor(private httpClient: HttpClient) { }

  sendPostRequest(data: any): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, data);
}
}