import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstoreService {
  
  
  authToken: any;
  isLoggedIn: boolean =false;

  public getSignInStatus(): any {
      return this.isLoggedIn;;

  }
  constructor() { }


}
