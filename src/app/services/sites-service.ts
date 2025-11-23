import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Site } from '../model/site';
import { Location } from '../model/location';
import { Comment } from '../model/comment';

// const apiUrl = 'http://localhost:3000/sites';
const apiUrl = 'https://project-backend-5z3s.onrender.com/sites';

@Injectable({
  providedIn: 'root',
})
export class SitesService {
  private readonly http: HttpClient = inject(HttpClient);


  getSites(): Observable<Site[]> {
    return this.http.get<Site[]>(apiUrl);
  }

  getSiteById(id: string): Observable<Site> {
    return this.http.get<Site>(`${apiUrl}/${id}`);
  }

  addSite(site: Site): Observable<Site> {
    return this.http.post<Site>(apiUrl, site);
  }

  updateSite(id: string, site: Site): Observable<Site> {
    return this.http.put<Site>(`${apiUrl}/${id}`, site);
  }

  deleteSite(id: string): Observable<Site> {
    return this.http.delete<Site>(`${apiUrl}/${id}`);
  }

  deleteComment(siteId: string, commentId: string): Observable<Comment> {
    return this.http.delete<Comment>(`${apiUrl}/${siteId}/comments/${commentId}`);
  }
  

  getCoordinates(name: string): Observable<Location> {
    return this.http.get<Location>(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}`);
  }
  
  addcomment(siteId: string, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${apiUrl}/${siteId}/comments`, comment);
  }





}