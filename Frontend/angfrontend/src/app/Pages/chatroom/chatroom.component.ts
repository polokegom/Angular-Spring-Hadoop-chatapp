import { AfterViewInit, Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent  implements AfterViewInit{

  private isContactPage: boolean =true;



  constructor(private router:Router) {}


  

  ngAfterViewInit(): void {  
  
 

   
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
    //this.overlay.openOverlay(RegisterComponent)
    //this.local_store.setSignInStatus()
  //  this.localStore.closeSignInStatus();
    this.router.navigate(['']);
  }

}