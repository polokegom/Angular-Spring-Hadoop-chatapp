import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/Forms/login/login.component';
import { RegisterComponent } from 'src/app/Forms/register/register.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  protected isLoggedIn: boolean = false;
  ngOnInit(): void {

    this.isLoggedIn = localStorage.getItem("PenguJwtID") != null
    //throw new Error('Method not implemented.');
  }
}
