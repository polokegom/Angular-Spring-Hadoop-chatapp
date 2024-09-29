import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalstoreService } from '../localstore.service';
import { RestStoreService } from '../rest-store.service';
import { Router } from '@angular/router';
import {ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' ]
})
export class LoginComponent {
  @ViewChild("userEmail", { static: true }) userEmail!: ElementRef<HTMLInputElement>;;
  @ViewChild("userPassword", { static: true }) userPassword!: ElementRef<HTMLInputElement>;;
  @Output() closepage = new EventEmitter<any>()
  constructor(private localStore: LocalstoreService, private restStore: RestStoreService, private router:Router){

  }
  

  doLogin(){
    let strUserEmail: string = this.userEmail.nativeElement.value;
    let strUserPassword: string = this.userPassword.nativeElement.value;
    let authToken: string = "";
    this.restStore.doLogin(strUserEmail,strUserPassword).subscribe((response)=>{

      this.localStore.setSignInStatus(response.authentication);
      if (response.success == true)
        this.router.navigate(['/chatroom']);
      else
        alert("Invalid email or password");
    })

    

  }

  closeWindow() {
    this.closepage.emit()
    //this.localStore.closeAuthWin()

  }
}
