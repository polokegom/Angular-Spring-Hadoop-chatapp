import { Injectable } from '@angular/core';
import { createAction, props } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestStoreService {

  constructor(private http: HttpClient) { }

  public doLogin(userEmail: String, userPassword: String): Observable<any> {
    /*const  loginState:Observable<any>  = this.http.post<any>("http://localhost:26000/authenticate", {useremail: userEmail, password: userPassword});
    oginState.subscribe((data)=>{/*
      alert(JSON.stringify(data));

    })*/
    return this.http.post<any>("http://localhost:26000/authenticate", {useremail: userEmail, userpassword: userPassword});
  }

  public doRegister(userName: String, userEmail: String, userPassword: String): boolean{
    let data = {username: userName, useremail: userEmail,userpassword: userPassword};
    const  observable:Observable<any>  = this.http.post<any>("127.0.0.1:26000/register", data)
    return false;
  }


  public verifyJwtToken(token: string):Observable<any>{
    let header: Headers =new Headers({"authorisation":token});
    return this.http.get<any>("http://locahost:26000/verify");
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
