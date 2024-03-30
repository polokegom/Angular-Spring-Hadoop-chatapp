import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, AfterViewInit, OnInit, Renderer2, HostListener} from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { LocalstoreService } from '../localstore.service';
import { Router,   NavigationStart, NavigationEnd} from '@angular/router';
import { Location } from '@angular/common';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild('contactIcon') btnContact!: ElementRef;
  @ViewChild(HomepageComponent) homepageComponent!: HomepageComponent;
  private styleResponsiveNav : any;
  private  onClickContact: any;
  private currentRoute!: string;
  private webpageStateForNav: string = ""; 
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
    alert(this.homepageComponent);

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

  public setPagestateForNav(state: string) {

    this.webpageStateForNav = state;
  }

  public checkHomeMainPage(): boolean {
    return (this.webpageStateForNav === "")&& (this.location.path() === "")
  }


  public checkChatPage(): boolean {

    return this.location.path() === "/chatroom"
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

  
  doLogin():void{
     // this.overlay.openOverlay(LoginComponent)
    
//     this.homepage.goToLogin();
  }

  doRegister():void{
      //this.overlay.openOverlay(RegisterComponent)
  //    this.homepage.goToRegister();
  }

  doLogout():void{
    //this.overlay.openOverlay(RegisterComponent)
    //this.local_store.setSignInStatus()
    this.local_store.closeSignInStatus()
    this.router.navigate(['/']);
  }

  gotoContacts(){
    this.local_store.doOnClickEventContacts()
    alert("contacts is working")

  }

}
