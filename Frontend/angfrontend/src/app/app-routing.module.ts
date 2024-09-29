import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { ModalAuthenticationComponent } from './Pages/modal-authentication/modal-authentication.component';

import { ChatroomComponent } from './Pages/chatroom/chatroom.component';
import { ChatSpaceComponent } from './Pages/chat-space/chat-space.component';


const routes: Routes = [
  {path:"", component:ChatSpaceComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
 
 }
