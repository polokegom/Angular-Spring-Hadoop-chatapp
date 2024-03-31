import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2,ViewChild } from '@angular/core';
import { LocalstoreService } from '../localstore.service';
import { Router,   NavigationStart, NavigationEnd} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements AfterViewInit{

  private isContactClicked: boolean = false;
  @ViewChild('contactIcon') btnContact!: ElementRef;



  constructor(private location: Location,private router:Router,private localStore: LocalstoreService, private dom: ElementRef, private renderer:Renderer2) {}


  

  ngAfterViewInit(): void {  
  
 
    if (window.innerWidth < 740) {
      this.renderer.setStyle(this.btnContact.nativeElement, 'visibility', 'visible')
    } else {
      this.renderer.setStyle(this.btnContact.nativeElement, 'visibility', 'hidden')

    }
   
  }


  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    const windowWidth = event.target.innerWidth;
 
    if (windowWidth < 740) {
      this.renderer.setStyle(this.btnContact.nativeElement,'visibility', 'visible')
    } else {
      this.renderer.setStyle(this.btnContact.nativeElement,'visibility', 'hidden')
    }
  }


  onClick(event: MouseEvent) {
    // Your click event logic here
    console.log('Contact icon clicked');
  }

  gotoContacts(): boolean {
    return true
  }

  sendMessage(){

    alert("message sent ")
  
    
  }

  doLogout():void{
    //this.overlay.openOverlay(RegisterComponent)
    //this.local_store.setSignInStatus()
    this.router.navigate(['/']);
  }


}
