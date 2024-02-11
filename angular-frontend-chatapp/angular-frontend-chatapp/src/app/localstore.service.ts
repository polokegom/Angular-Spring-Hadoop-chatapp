import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstoreService {
  
  
  authToken: any;
  isLoggedIn: boolean =false;
  isAuthWinLive: boolean = false;
  
  
  public getSignInStatus(): any {
      return this.isLoggedIn;;
  }

  public isAuthWinOpen(): any {
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
