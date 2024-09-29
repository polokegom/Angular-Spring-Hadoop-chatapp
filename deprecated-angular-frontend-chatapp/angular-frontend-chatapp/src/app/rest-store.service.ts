import { Injectable } from '@angular/core';
import { createAction, props } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public doRegister(userName: String, userEmail: String, userPassword: String): Observable<any>{
    let data = {username: userName, useremail: userEmail,userpassword: userPassword};
    const  observable:Observable<any>  = this.http.post<any>("127.0.0.1:26000/register", data)
    return observable;
  }


  public verifyJwtToken(token: string):boolean{
    let isValid: boolean = false;
    const headers = new HttpHeaders({'Authorisation': token});
    const xhr = new XMLHttpRequest();
    xhr.open("GET","http://localhost:26000/verify",false)
    xhr.setRequestHeader("Authorisation",token);
    xhr.send(null);
    if (xhr.status == 200){
      isValid = JSON.parse(xhr.responseText).success;
    }
    
    // const response = await this.http.get<any>("http://localhost:26000/verify", { headers }).toPromise()
    //let isValid: boolean = response.success
    return isValid;
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
