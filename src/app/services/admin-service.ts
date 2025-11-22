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

  login(user: String, pass: String): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${apiAdminUrl}?username=${user}&password=${pass}`);
  }
  updatePassword(username: string, oldPassword: string, newPassword: string): Observable<any> {
    return this.http.put<any>(`${apiAdminUrl}/password`, {
      username,
      oldPassword,
      newPassword
    });
  }

}
