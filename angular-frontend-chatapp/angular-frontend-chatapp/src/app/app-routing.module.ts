import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DialogexampleComponent } from './dialogexample/dialogexample.component';
const routes: Routes = [
  //{path: '',  component:HomepageComponent},
  {path: '',  component:DialogexampleComponent},

  {path: 'login',  component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'chatroom', component:ChatroomComponent},
  {path: 'chatroom/chat', component:ChatroomComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
