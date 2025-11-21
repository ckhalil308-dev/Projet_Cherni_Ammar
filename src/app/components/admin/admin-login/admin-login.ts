import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { SitesService } from '../../../services/sites-service';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {
  private readonly siteservice:SitesService=inject(SitesService)
  private snackBar: MatSnackBar = inject(MatSnackBar);
  private readonly router:Router=inject(Router);
  d:string='';
  username:String='';
  password:String=''; 
  // userName:string='admin';
  // Password:string='admin@123';

login(){
  if(this.siteservice.login(this.username,this.password)){
    localStorage.setItem('role', 'admin');

    this.snackBar.open('Login Successful!', 'Close', {
      duration: 1500,
      verticalPosition: 'top',
      horizontalPosition: 'left',
    });
     this.router.navigate(['/admindash'])
   
  }
  else {
    this.snackBar.open('Login Failed! Incorrect Username or Password', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'left',
    });
  }
}

  
  
  



}
