import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, AfterViewInit, OnInit, Renderer2, HostListener} from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { LocalstoreService } from '../localstore.service';
import { Router,   NavigationStart, NavigationEnd} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild('contactIcon') btnContact!: ElementRef;
  private styleResponsiveNav : any;
  private  onClickContact: any;
  private currentRoute!: string;
  
  constructor(private location: Location,private router:Router,private local_store: LocalstoreService, private dom: ElementRef, private renderer:Renderer2){
    this.styleResponsiveNav = `'@media screen and (max-width: 740px)' {
    
      '#logoContact'{
          display:flex;
      }
      #logo{
          display: none;
      }
    }
    `;


  }
  public onClickContacts(event_func: any) {
    this.onClickContact = event_func;
  }
  
  ngOnInit(): void {
    /*
    if Oauth equal found then
      perform state change
    else 
      perform default
    */
    this.btnContact.nativeElement

  }
  
  ngAfterViewInit(): void {
    this.local_store.btnNavbarContact = this.btnContact;
    this.local_store.navRenderer = this.renderer;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (window.innerWidth < 740 && this.local_store.getSignInStatus()) {
            this.renderer.setStyle(this.btnContact.nativeElement, 'visibility', 'visible')
        } else {
          this.renderer.setStyle(this.btnContact.nativeElement, 'visibility', 'hidden')

        }
      }
    });
    /*
    const newStyle = this.renderer.createElement('style');
    newStyle.textContent = "#navbar-right-items {color:red;}";
    this.renderer.appendChild(document.head,newStyle)*/
  
  }

  responsiveNavbar() {


  }


  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    const windowWidth = event.target.innerWidth;
 
    if (windowWidth < 740 && this.location.path() === "/chatroom") {
      this.renderer.setStyle(this.btnContact.nativeElement,'visibility', 'visible')
    } else {
      this.renderer.setStyle(this.btnContact.nativeElement,'visibility', 'hidden')
      this.local_store.isOnContactPage = false;
    }
  }

  
  isAuthWinOpen():boolean{
      return this.local_store.isAuthWinLive
  }

  isSignedIn():boolean{
    return this.local_store.getSignInStatus()
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

  doLogout():void{
    //this.overlay.openOverlay(RegisterComponent)
    //this.local_store.setSignInStatus()
    this.local_store.closeAuthWin()
    this.router.navigate(['/']);
    
  }

  gotoContacts(){
    this.local_store.doOnClickEventContacts()
    alert("contacts is working")

  }

}
