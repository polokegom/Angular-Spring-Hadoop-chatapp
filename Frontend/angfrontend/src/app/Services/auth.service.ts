import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private  url:String ="http://localhost:26000";

  constructor(private http: HttpClient) { }


  public doLogin(user: User): Observable<any> {
 
    return this.http.post<any>(this.url + "/authenticate", user);
  }

  public doRegister(user: User): Observable<any>{

    return this.http.post<any>(this.url + "/register", user);
  }


  public verifyJwtToken(token: string):boolean{
    let isValid: boolean = false;
    const headers = new HttpHeaders({'Authorisation': token});
    const xhr = new XMLHttpRequest();
    xhr.open("GET",this.url + "/verify",false)
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
    const  observable:Observable<any>  = this.http.get<any>(this.url + "/queryusername")
    return "";
  }



  public isValidToken(): boolean {
    const  observable:Observable<any>  = this.http.get<any>(this.url + "/login")

    return false;

  }}
