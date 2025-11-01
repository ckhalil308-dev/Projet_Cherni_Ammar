import { Injectable } from '@angular/core';
import { Sites } from '../model/sites';

@Injectable({
  providedIn: 'root',
})
export class SitesService {
  private sites: Sites[] = [
    {
      id: 1,
      title: "Carthage Ruins",
      era: "Phénicienne puis romaine",
      imageUrl: "assets/sites/carthage/main.jpg",
      adresse: "Carthage, Gouvernorat de Tunis, Tunisie",
      price: 15,
      open: true,
      creation_date: new Date("-0814-01-01"), 
      rating: 4.6,
      openingHours: "09:00 - 19:00",
      visitorsPerYear: 700000,
      comments: [
        { author: "Sami", content: "Amazing ruins! The history is incredible.", date: new Date("2025-04-12"), rating: 5 },
        { author: "Leila", content: "Beautiful site but quite crowded in summer.", date: new Date("2025-06-05"), rating: 4 }
      ],
      gallery: [
        ""
      ]
    }
  ];
  getSites(): Sites[] {
    return this.sites;
  }
  addSite(site: Sites): void {
    this.sites.push(site);


}
removeSite(site: Sites): void {
    const index = this.sites.indexOf(site);
    if (index > -1) {
      this.sites.splice(index, 1);
    } 
}




}