import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { HomepageComponent } from './homepage/homepage.component';
const routes: Routes = [
  {path: '',  component:HomepageComponent},
{path: 'chatroom', component:ChatroomComponent/*,canActivate:[authgaurdGuard]*/},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
