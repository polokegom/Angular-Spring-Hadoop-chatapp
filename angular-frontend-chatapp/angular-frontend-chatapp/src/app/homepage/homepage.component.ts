import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LocalstoreService } from '../localstore.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { SplashComponent } from '../splash/splash.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  protected pagestate:any = "";
  
  constructor(private router: Router,private localStore: LocalstoreService) {

  }
  ngOnInit(): void {

    this.localStore.isOnContactPage = false;
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
