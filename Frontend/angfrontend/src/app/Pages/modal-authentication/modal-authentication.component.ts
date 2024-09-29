import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/Forms/login/login.component';
import { ModalLoginComponent } from 'src/app/Forms/modal-login/modal-login.component';
import { ModalRegisterComponent } from 'src/app/Forms/modal-register/modal-register.component';
import { RegisterComponent } from 'src/app/Forms/register/register.component';

@Component({
  selector: 'app-modal-authentication',
  templateUrl: './modal-authentication.component.html',
  styleUrls: ['./modal-authentication.component.css']
})
export class ModalAuthenticationComponent {


  
  constructor(public dialog: MatDialog){

  }

  public OnClickLogin(): void {

    const dialogRef = this.dialog.open(ModalLoginComponent, {width: '80%',maxWidth:'650px'});

''
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public OnclickRegister(): void {

    const dialogRef = this.dialog.open(ModalRegisterComponent, {width: '80%',maxWidth:'650px'});


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
