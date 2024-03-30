import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocalstoreService } from '../localstore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  @Input() word:string = "he"
  @Output() closepage = new EventEmitter<any>()

  constructor(private localStore: LocalstoreService, private router:Router){

  }

  doRegister(){
    alert("Autenticate account")
    this.closeWindow()
  }

  closeWindow() {
    this.closepage.emit()
    //this.localStore.closeAuthWin()

  }
}
