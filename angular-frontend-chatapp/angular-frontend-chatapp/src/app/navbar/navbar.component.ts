import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { OverlayServiceService } from '../overlay-service.service';
import { LocalstoreService } from '../localstore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router,private local_store: LocalstoreService,private overlay:OverlayServiceService){}
  
  isAuthWinOpen():boolean{
      return this.local_store.isAuthWinLive
  }
  
  doLogin():void{
     // this.overlay.openOverlay(LoginComponent)
     this.local_store.openAuthWin();
     this.router.navigate(['/login']);
  }

  doRegister():void{
      //this.overlay.openOverlay(RegisterComponent)
      this.local_store.openAuthWin()
      this.router.navigate(['/register']);
  }

}
