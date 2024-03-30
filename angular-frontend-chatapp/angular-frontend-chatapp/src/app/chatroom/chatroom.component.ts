import { AfterViewInit, Component, ElementRef, OnInit, Renderer2,ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LocalstoreService } from '../localstore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements AfterViewInit, OnInit{

  private isContactClicked: boolean = false;
  constructor(private renderer: Renderer2, private localStore: LocalstoreService, private router: Router) {
    
    this.localStore.isOnContactPage = false;
  }

  ngOnInit(): void {
    if (this.localStore.getSignInStatus())
      this.router.navigate(["/chatroom"]);
  }
  

  ngAfterViewInit(): void {  
  
    this.localStore.setOnClickEventContacts(()=>{
      alert("clicked")
      this.localStore.isOnContactPage = true
      
    })
  }

  onClick(event: MouseEvent) {
    // Your click event logic here
    console.log('Contact icon clicked');
  }

  gotoContacts() {
    return this.localStore.isOnContactPage;
  }

  sendMessage(){

    alert("message sent ")
  
    
  }
}
