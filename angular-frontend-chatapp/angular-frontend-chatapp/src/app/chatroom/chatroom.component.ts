import { AfterViewInit, Component, ElementRef, Renderer2,ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LocalstoreService } from '../localstore.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements AfterViewInit{

  private isContactClicked: boolean = false;
  constructor(private renderer: Renderer2, private localstore: LocalstoreService) {
    
    this.localstore.isOnContactPage = false;
  }
  ngAfterViewInit(): void {  
  
    this.localstore.setOnClickEventContacts(()=>{
      alert("clicked")
      this.localstore.isOnContactPage = true
      
    })
  }

  onClick(event: MouseEvent) {
    // Your click event logic here
    console.log('Contact icon clicked');
  }

  gotoContacts() {
    return this.localstore.isOnContactPage;
  }

  sendMessage(){

    alert("message sent ")
  
    
  }
}
