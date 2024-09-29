import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Forms/login/login.component';
import { RegisterComponent } from './Forms/register/register.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { ChatSpaceComponent } from './Pages/chat-space/chat-space.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AuthenticationComponent } from './Pages/authentication/authentication.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { ModalLoginComponent } from './Forms/modal-login/modal-login.component';
import { ModalRegisterComponent } from './Forms/modal-register/modal-register.component';
import { ModalAuthenticationComponent } from './Pages/modal-authentication/modal-authentication.component';
import { ChatroomComponent } from './Pages/chatroom/chatroom.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ChatSpaceComponent,
    PageNotFoundComponent,
    AuthenticationComponent,
    AdminComponent,
    ModalLoginComponent,
    ModalRegisterComponent,
    ModalAuthenticationComponent,
    ChatroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatMenuModule,
    MatDialogModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
