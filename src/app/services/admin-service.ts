import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';
import { HttpClient } from '@angular/common/http';

const apiAdminUrl = 'http://localhost:3000/admin';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private readonly http: HttpClient = inject(HttpClient);
  confirmPassword(newPassword: string, confirmPassword: string): boolean {
    return newPassword === confirmPassword;
  }
  checkLength(password: string, minLength: number): boolean {
    return password.length > minLength;
  }
  login(user: string, pass: string): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${apiAdminUrl}?username=${user}&password=${pass}`);
  }
  updatePassword(username: string, oldPassword: string, newPassword: string): Observable<string> {
    return this.http.put<string>(`${apiAdminUrl}/password`, {
      username,
      oldPassword,
      newPassword
    });
  }
  logout() {
    localStorage.removeItem("role");
  }

}
