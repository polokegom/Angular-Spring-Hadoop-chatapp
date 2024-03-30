import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DialogexampleComponent } from './dialogexample/dialogexample.component';
import { authgaurdGuard } from './authgaurd.guard';
import { SplashComponent } from './splash/splash.component';
const routes: Routes = [
  //{path: '',  component:HomepageComponent},
  {path: '',  component:HomepageComponent},
{path: 'chatroom', component:ChatroomComponent/*,canActivate:[authgaurdGuard]*/},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
