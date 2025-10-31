import { Injectable } from '@angular/core';
import { Sites } from './model/sites';

@Injectable({
  providedIn: 'root',
})
export class SitesService {
  private sites: Sites[] = [
    {
      id: 1,
      title: 'Carthage Ruins',
      era: 'Phoenician / Roman',
      imageUrl: 'assets/images/eiffel_tower.jpg',
      adresse: '88 Route de La Goulette, Carthage, Tunisia.',
      price: 12,
      open: true,
      creation_date: new Date(-814, 0, 1)


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