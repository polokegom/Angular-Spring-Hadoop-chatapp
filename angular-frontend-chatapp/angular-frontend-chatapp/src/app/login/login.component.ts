import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalstoreService } from '../localstore.service';
import { RestStoreService } from '../rest-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' ]
})
export class LoginComponent {

  constructor(private localStore: LocalstoreService, private restStore: RestStoreService, private router:Router){

  }

  doLogin(){
    alert("1")
    this.restStore.doLogin("lerato@gmail.com","Lerato123#").subscribe((response)=>{

        alert(response)
        alert(response.expiration)
        //var objResponse: JSON = JSON.parse(response);
        this.localStore.setSignInStatus(response);
        this.router.navigate(['/chatroom']);
    })
    alert("2")

    

  }

  closeWindow() {
    this.localStore.closeAuthWin()
    this.router.navigate(['/']);

  }
}
