import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { LocalstoreService } from '../localstore.service';
import { Router } from '@angular/router';
import { RestStoreService } from '../rest-store.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  @Input() word:string = ""
  @Output() closepage = new EventEmitter<any>()
  @ViewChild("username", { static: true }) userName!: ElementRef<HTMLInputElement>;
  @ViewChild("useremail", { static: true }) userEmail!: ElementRef<HTMLInputElement>;
  @ViewChild("userpassword", { static: true }) userPassword!: ElementRef<HTMLInputElement>;

  constructor(private restStore: RestStoreService, private router:Router){

  }

  doRegister(){
      alert("Autenticate account")
      let strUserName: string = this.userName.nativeElement.value;
      let strUserEmail: string = this.userEmail.nativeElement.value;
      let strUserPassword:string = this.userPassword.nativeElement.value;
      this.restStore.doRegister(strUserName,strUserEmail,strUserPassword).subscribe((response)=>{
      if(response.success)
        alert("You have successfully registered as a new user")
      else
        alert("Error: Something went wrong. you have either already registered or we are experiencing technical faults")
    })
    

  }

  closeWindow() {
    this.closepage.emit()
    //this.localStore.closeAuthWin()

  }
}
