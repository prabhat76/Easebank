import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = 'http://localhost:9090/api/customers';
  constructor(private http:HttpClient) { }

  getCustomerDetails(): Observable<any> {
    return this.http.get('apis/customerdetails.json');
  }

  getDashbaordcontent(): Observable<any> {
    return this.http.get('content/generic.content.json');
  }

  login(): Observable<any[]> {
    // Example update in your ApiService:
return this.http.get<any[]>(this.API_URL);
  }

  getGenericContent():Observable<any>{
    return this.http.get("/content/generic.content.json")
  }
}
