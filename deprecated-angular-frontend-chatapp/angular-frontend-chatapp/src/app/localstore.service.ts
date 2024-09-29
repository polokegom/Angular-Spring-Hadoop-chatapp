import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { ReducerManager } from '@ngrx/store';
import { NavbarComponent } from './navbar/navbar.component';
import { SessionStorage } from 'ngx-webstorage';
import { RestStoreService } from './rest-store.service';
@Injectable({
  providedIn: 'root'
})
export class LocalstoreService {
  static getSignInStatus(): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    throw new Error('Method not implemented.');
  }
  
  private isSignIn: boolean =false;
  private onClickContact: any;


  constructor(private reststore: RestStoreService) {
  
  }

  
  public getSignInStatus(): boolean {

      let jwtToken:string|null = sessionStorage.getItem("penguAuthToken");
      let isValid: boolean = false;

      if (jwtToken != null)
        isValid = this.reststore.verifyJwtToken(jwtToken)

      return isValid;
  }

  public setSignInStatus(token: string): void {
    sessionStorage.setItem("penguAuthToken", token);
    this.isSignIn = true;
  }

  public closeSignInStatus(): void {
    sessionStorage.removeItem("penguAuthToken");
      this.isSignIn = true;
  }

  public setOnClickEventContacts(event_func: any) {

    this.onClickContact = event_func;
  }

  public doOnClickEventContacts() {

    this.onClickContact()
  }



}
