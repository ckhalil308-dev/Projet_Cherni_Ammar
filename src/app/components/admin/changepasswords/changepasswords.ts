import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-changepasswords',
  imports: [FormsModule],
  templateUrl: './changepasswords.html',
  styleUrl: './changepasswords.css',
})
export class Changepasswords {
  currentPassword: string = '';
  newPassword: string = ''
  d:string = '';
  router:Router = inject(Router);
   password:string = 'admin123';
    private snackBar: MatSnackBar = inject(MatSnackBar);
  adminPassword(){
    if(this.currentPassword === this.password && this.newPassword.length >=6){
      this.router.navigate(['/admin']); 
         this.snackBar.open('Login Failed! Incorrect Username or Password', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'left',
      });
     }
     else{
          this.snackBar.open('Password Change Failed! Incorrect Current Password or New Password too short', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'left',
      });
     }


}




}
