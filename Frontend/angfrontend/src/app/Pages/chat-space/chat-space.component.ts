import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-space',
  templateUrl: './chat-space.component.html',
  styleUrls: ['./chat-space.component.css']
})
export class ChatSpaceComponent implements AfterViewInit{

  private isContactPage: boolean =false;
  @ViewChild('contactIcon') btnContact!: ElementRef;



  constructor(private router:Router, private dom: ElementRef, private renderer:Renderer2) {}


  

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
    return this.isContactPage;
  }

  sendMessage(){

    alert("message sent ")
  
    
  }

  doLogout():void{

    this.router.navigate(['']);
  }

}