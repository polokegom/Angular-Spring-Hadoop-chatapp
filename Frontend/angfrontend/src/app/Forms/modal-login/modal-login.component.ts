import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User.model';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit{

  protected loginForm!: FormGroup;
  protected hasFormSubmitted = false;

  constructor(private authstore: AuthService, private fb:FormBuilder,private router: Router){

  }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      UserEmail: ['', [Validators.required, Validators.email]],
      UserPassword: ['', [Validators.required, Validators.minLength(6)]]
    });  
  }

  public OnClickLogin() {

    this.hasFormSubmitted = true;     

    if (this.loginForm.valid) {
      var user = this.loginForm.value as User;
      this.authstore.doLogin(user).subscribe((sysUser)=>{
        
        if (sysUser.success == true){
          localStorage.setItem("PenguJwtID",sysUser.authentication)
          alert("Congratulations:\n\nYou have successfully logged in "+ sysUser.UserName)
          window.location.reload();
        } else
        alert("⚠️Error:\n\nInvalid email or Password");
      })

          
    }else {
      this.loginForm.markAllAsTouched();
    }
  }

  protected get UserEmail() {
    return this.loginForm?.controls['UserEmail'];
  }

  protected get UserPin() {
    return this.loginForm?.controls['UserPassword'];
  }

}
