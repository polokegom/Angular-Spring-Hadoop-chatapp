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
  
  authToken: any;
  private isSignIn: boolean =false;
  btnNavbarContact!: ElementRef;
  navRenderer!: any;
  isOnContactPage:any;
  private onClickContact: any;
  btnNavbarNonContact!: ElementRef;
  isAuthWinLive: boolean = false;

  constructor(private reststore: RestStoreService) {
  
  }

  //----------------------------------------
  
  public getSignInStatus(): boolean {
      let jwtToken:string|null = sessionStorage.getItem("penguAuthToken");
      
      let isValid: boolean = false
      if (jwtToken != null)
        this.reststore.verifyJwtToken(jwtToken!).subscribe((response)=>isValid = response.success)
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

  public isAuthWinOpen(): boolean {
    return this.isAuthWinLive
  }


  //-----------------------------------------

  public openAuthWin() {
    this.isAuthWinLive = true;
  }

  public closeAuthWin() {
    this.isAuthWinLive = false
  }


  public setOnClickEventContacts(event_func: any) {

    this.onClickContact = event_func;
  }

  public doOnClickEventContacts() {

    this.onClickContact()
  }


/*
  public changeToAuthNavbar(){

    const newStyle = this.renderer.createElement('style');
  }*/
}
