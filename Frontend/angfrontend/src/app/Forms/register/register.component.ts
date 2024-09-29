import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { User } from 'src/app/Model/User.model';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit {

  protected registerForm!: FormGroup;
  protected hasFormSubmitted = false;
  @Input() word:string = ""
  @Output() closepage = new EventEmitter<any>()


  constructor(private authstore:AuthService,private fb:FormBuilder) {
  }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      UserName: ['', [Validators.required, Validators.minLength(2)]],
      UserEmail: ['', [Validators.required, Validators.email]],
      UserPassword: ['', [Validators.required, Validators.minLength(6)]],
      UserConfirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });  
  
  }

  public OnClickRegister(): void{

    this.hasFormSubmitted = true;     

    if (this.registerForm.valid) {
      
      var user = this.registerForm.value ;
      var myuser: any = {
        userName: user.UserName,
        userEmail: user.UserEmail,
        userPassword: user.UserPassword,
        userIsAdmin:false

      } as User

      this.authstore.doRegister(user).subscribe((response)=>{
        if(response.success)
          alert("Congratulations:\n\nYou have successfully registered")
        else
          alert("⚠️Error:\n\nSomething went wrong")
      })
      
    } 
    
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('UserPassword'); 
    const confirmPassword = control.get('UserConfirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  closeWindow() {
    this.closepage.emit()
    //this.localStore.closeAuthWin()

  }

  protected get UserName() {
    return this.registerForm?.controls['UserName'];
  }


  protected get Email() {
    return this.registerForm?.controls['UserEmail'];
  }

  protected get UserPin() {
    return this.registerForm?.controls['UserPassword'];
  }

  protected get ConfirmPin() {
    return this.registerForm?.controls['UserConfirmPassword'];
  }


}
