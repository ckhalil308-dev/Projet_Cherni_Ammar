import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminService } from '../../../services/admin-service';

@Component({
  selector: 'app-admin-nav',
  imports: [RouterLink],
  templateUrl: './admin-nav.html',
  styleUrl: './admin-nav.css',
})
export class AdminNav {
  private readonly adminservice:AdminService=inject(AdminService);
  logout(){
    this.adminservice.logout();
  }

}
