import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Site } from '../model/site';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root',
})
export class SitesService {
  // userName:String="admin"
  //  password: string = localStorage.getItem("password") || "admin@123";


  private apiUrl = 'http://localhost:3000/sites';
  private apiAdminUrl = 'http://localhost:3000/admin';

  private http = inject(HttpClient);
  

  getSites(): Observable<Site[]> {
   return this.http.get<Site[]>(this.apiUrl);
  }

  getSiteById(id: string): Observable<Site>{
    return this.http.get<Site>(`${this.apiUrl}/${id}`);
  }

  addSite(site: Site): Observable<Site> {
   return this.http.post<Site>(this.apiUrl, site);
  }

  updateSite(id: string, site: Site): Observable<Site> {
  return this.http.put<Site>(`${this.apiUrl}/${id}`, site);
  }

  deleteSite(id: string): Observable<Site> {
    return this.http.delete<Site>(`${this.apiUrl}/${id}`);
  }

  deleteComment(siteId: string, commentId: string): Observable<Comment>{
    return this.http.delete<Comment>(`${this.apiUrl}/${siteId}/comments/${commentId}`);
  }

  //  login(user: String, pass: String): boolean {
  //   return user.trim() === this.userName && pass === this.password;
  // }
  login(user: String, pass: String):Observable<Admin[]>{
    return this.http.get<Admin[]>(`${this.apiAdminUrl}?username=${user}&password=${pass}`);
  }
 updatePassword(username: string, oldPassword: string, newPassword: string): Observable<any> {
  return this.http.put<any>(`${this.apiAdminUrl}/password`, {
    username,
    oldPassword,
    newPassword
  });
}


  // checkPassword(password:string){
  //   return this.password==password
  // }
  // setPassword(password:string){
  //   this.password=password
  //   localStorage.setItem("password",password)
  // }



}