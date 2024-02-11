import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { OverlayServiceService } from '../overlay-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private overlay:OverlayServiceService){}
  doLogin():void{
      this.overlay.openOverlay(LoginComponent)
  }

  doRegister():void{
      this.overlay.openOverlay(RegisterComponent)
 
  }

}
