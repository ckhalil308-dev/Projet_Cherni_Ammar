import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SitesService } from '../../../services/sites-service';

@Component({
  selector: 'app-changepasswords',
  imports: [FormsModule],
  templateUrl: './changepasswords.html',
  styleUrl: './changepasswords.css',
})
export class Changepasswords {
  private readonly router:Router = inject(Router);
  private readonly snackBar: MatSnackBar = inject(MatSnackBar);
  private readonly siteService:SitesService=inject(SitesService)

  currentPassword:string=''
  newPassword: string = ''
  confirmPassword:string=''

adminPassword() {
  if (!this.siteService.checkPassword(this.currentPassword)) {
    this.snackBar.open("Old password is incorrect!", "Close", {
      duration: 1500,
      verticalPosition: "top",
      horizontalPosition: "left",
    });
  }
  else if (this.newPassword.length <= 6) {
    this.snackBar.open("New password must be longer than 6 characters!", "Close", {
      duration: 1500,
      verticalPosition: "top",
      horizontalPosition: "left",
    });
  }
  else if (this.newPassword !== this.confirmPassword) {
    this.snackBar.open("New passwords do not match!", "Close", {
      duration: 1500,
      verticalPosition: "top",
      horizontalPosition: "left",
    });
  }
  else {
    this.siteService.setPassword(this.newPassword);
    this.snackBar.open("Password changed successfully!", "Close", {
      duration: 1500,
      verticalPosition: "top",
      horizontalPosition: "left",
    });

    this.currentPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
    this.router.navigate(["/admin"]);

  }
}
}





