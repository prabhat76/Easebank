import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getCustomerDetails(): Observable<any> {
    return this.http.get('apis/customerdetails.json');
  }

  getDashbaordcontent(): Observable<any> {
    return this.http.get('content/generic.content.json');
  }
}
