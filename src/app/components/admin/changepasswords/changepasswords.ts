import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin-service';

@Component({
  selector: 'app-changepasswords',
  imports: [FormsModule],
  templateUrl: './changepasswords.html',
  styleUrl: './changepasswords.css',
})
export class Changepasswords {
  private readonly router:Router = inject(Router);
  private readonly snackBar: MatSnackBar = inject(MatSnackBar);
  private readonly adminService:AdminService=inject(AdminService);

  currentPassword:string=''
  newPassword: string = ''
  confirmPassword:string=''
  adminPassword() {
  if (!this.adminService.checkLength(this.newPassword, 6) ) {
    this.snackBar.open("New password must be longer than 6 characters!", "Close", {
      duration: 1500,
      verticalPosition: "top",
      horizontalPosition: "left",
    });
    return;
  }

  if (!this.adminService.confirmPassword(this.newPassword, this.confirmPassword)) {
    this.snackBar.open("New passwords do not match!", "Close", {
      duration: 1500,
      verticalPosition: "top",
      horizontalPosition: "left",
    });
    return;
  }
  this.adminService.updatePassword("admin", this.currentPassword, this.newPassword)
    .subscribe({
      next: (res: any) => {
        this.snackBar.open(res.message, "Close", {
          duration: 1500,
          verticalPosition: "top",
          horizontalPosition: "left",
        });
        this.currentPassword ='';
        this.newPassword ='';
        this.confirmPassword = '';

        this.router.navigate(["/admin"]);
      },
      error: (err:any) => {
        this.snackBar.open(err.error.message || "Failed to change password", "Close", {
          duration: 2000,
          verticalPosition: "top",
          horizontalPosition: "left",
        });
      }
    });
}

}





