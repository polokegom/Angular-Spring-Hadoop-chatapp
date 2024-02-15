import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalstoreService } from '../localstore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' ]
})
export class LoginComponent {

  constructor(private localStore: LocalstoreService, private router:Router){

  }

  doLogin(){
    this.localStore.setSignInStatus(true);
    this.router.navigate(['/chatroom']);

  }

  closeWindow() {
    this.localStore.closeAuthWin()
    this.router.navigate(['/']);

  }
}
