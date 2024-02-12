import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstoreService {
  
  
  authToken: any;
  isSignIn: boolean =false;
  isAuthWinLive: boolean = false;
  
  
  public getSignInStatus(): boolean {
      return this.isSignIn;
  }

  public isAuthWinOpen(): boolean {
    return this.isAuthWinLive
  }

  public openAuthWin() {
    this.isAuthWinLive = true;
  }

  public closeAuthWin() {
    this.isAuthWinLive = false
  }

  constructor() { }


}
