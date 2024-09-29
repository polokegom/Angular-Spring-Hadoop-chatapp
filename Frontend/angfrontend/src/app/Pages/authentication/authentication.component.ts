import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/Forms/login/login.component';
import { ModalLoginComponent } from 'src/app/Forms/modal-login/modal-login.component';
import { ModalRegisterComponent } from 'src/app/Forms/modal-register/modal-register.component';
import { RegisterComponent } from 'src/app/Forms/register/register.component';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent  implements OnInit {
  
  protected pagestate:any = "";
  
  constructor(private router: Router) {

  }
  ngOnInit(): void {

    //this.localStore.isOnContactPage = false;
  }


  public checkHomeMainPage(): boolean {
    return (this.pagestate === "")
  }


  public goToLogin():void {
      this.pagestate = "login"
  }

  public goToRegister():void{
      this.pagestate = "register"

  }

  public goToHome():void{
      this.pagestate = ""
  }

  
  
}
