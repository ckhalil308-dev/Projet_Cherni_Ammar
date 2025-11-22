import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from '../../../services/admin-service';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {
  private readonly adminService:AdminService=inject(AdminService);
  private snackBar: MatSnackBar = inject(MatSnackBar);
  private readonly router:Router=inject(Router);
  d:string='';
  username:String='';
  password:String=''; 

login(){
 
  this.adminService.login(this.username,this.password).subscribe(
    data=>{
      if(data.length>0){
        localStorage.setItem('role', 'admin');  
   
      localStorage.setItem('role', 'admin');
    this.snackBar.open('Login Successful!', 'Close', {
      duration: 1500,
      verticalPosition: 'top',
      horizontalPosition: 'left',
    });
     this.router.navigate(['/admindash']) }
    else{
       this.snackBar.open('Login Failed! Incorrect Username or Password', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'left',
    });

    }


  }
  )
}

  
  
  



}
