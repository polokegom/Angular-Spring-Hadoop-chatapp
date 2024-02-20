import { Injectable } from '@angular/core';
import { createAction, props } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  constructor(private http: HttpClient) { }

  public doLogin(userEmail: String, userPassword: String): String {
    const  observable:Observable<any>  = this.http.get<any>("127.0.0.1:26000/login")
    return "";
  }

  public doRegister(userName: String, userEmail: String, userPassword: String): boolean{
    let data = {username: userName, useremail: userEmail, password: userPassword};
    const  observable:Observable<any>  = this.http.post<any>("127.0.0.1:26000/register", data)
    return false;
  }

  public queryUserName(userName: String): String {
    const  observable:Observable<any>  = this.http.get<any>("127.0.0.1:26000/queryusername")
    return "";
  }



  public isValidToken(): boolean {
    const  observable:Observable<any>  = this.http.get<any>("127.0.0.1:26000/login")

    return false;

  }

}
