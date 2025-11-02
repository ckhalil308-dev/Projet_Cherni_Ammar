import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//allows to handle async data streams from HTTP calls
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SitesService {
  private apiUrl = 'http://localhost:3000/sites';

  private http = inject(HttpClient);

  //observable is like streams of data, u subscribe to them to get the data
  getSites(): Observable<any[]> {
    //any indicates expecting an array and the rest is making a HTTP GET request
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






//   private sites: Sites[] = [
//     {
//       id: 1,
//       title: "Carthage Ruins",
//       era: "Phénicienne puis romaine",
//       imageUrl: "assets/sites/carthage/main.jpg",
//       adresse: "Carthage, Gouvernorat de Tunis, Tunisie",
//       price: 15,
//       open: true,
//       creation_date: new Date("-0814-01-01"), 
//       rating: 4.6,
//       openingHours: "09:00 - 19:00",
//       visitorsPerYear: 700000,
//       comments: [
//         { author: "Sami", content: "Amazing ruins! The history is incredible.", date: new Date("2025-04-12"), rating: 5 },
//         { author: "Leila", content: "Beautiful site but quite crowded in summer.", date: new Date("2025-06-05"), rating: 4 }
//       ],
//       gallery: [
//         ""
//       ]
//     }
//   ];
//   getSites(): Sites[] {
//     return this.sites;
//   }
//   addSite(site: Sites): void {
//     this.sites.push(site);
// }
// removeSite(site: Sites): void {
//     const index = this.sites.indexOf(site);
//     if (index > -1) {
//       this.sites.splice(index, 1);
//     } 
// }




}