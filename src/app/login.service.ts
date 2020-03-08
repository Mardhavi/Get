import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Details } from './Models/login.interface';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getdetails(): Observable<Details> {
    return this.httpClient.get<Details>("http://localhost:8080/home/getDetails");
   }
 
   getDetail(id: number):Observable<Details>{
     return this.httpClient.get<Details>('http://localhost:8080/home/getDetail/'+id);
   }
  
} 

