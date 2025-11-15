import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SitesService {
  userName:String="admin"
   password: string = localStorage.getItem("password") || "admin@123";

  private apiUrl = 'http://localhost:3000/sites';

  private http = inject(HttpClient);

  getSites(): Observable<any[]> {
   return this.http.get<any[]>(this.apiUrl);
  }

  addSite(site: any): Observable<any> {
   return this.http.post<any>(this.apiUrl, site);
  }

  updateSite(id: number, site: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/${id}`, site);
  }

  deleteSite(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  deleteComment(siteId: number, commentId: number): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${siteId}/comments/${commentId}`);
  }
   login(user: String, pass: String): boolean {
    return user.trim() === this.userName && pass === this.password;
  }
  checkPassword(password:String){
    return this.password==password
  }
  setPassword(password:string){
    this.password=password
    localStorage.setItem("password",password)
  }



}