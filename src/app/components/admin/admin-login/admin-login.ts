import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {
  username:String='';
  password:String=''; 
  router:Router=inject(Router);
  UserName:string='admin';
  Password:string='admin123';
  d:string='';
    private snackBar: MatSnackBar = inject(MatSnackBar);
  login(){
    if(this.username.trim()==this.UserName && this.password==this.Password){
      this.router.navigate(['/admindash']);
      this.snackBar.open('Login Successful!', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'left',
      });
    }
    else{
         this.snackBar.open('Login Failed! Incorrect Username or Password', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'left',
      });
    }
  }
  
  
  



}
