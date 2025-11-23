
import { AfterViewInit, Component, inject } from '@angular/core';
import * as L from 'leaflet';
import { SitesService } from '../../services/sites-service';

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.html',
  styleUrls: ['./site-map.css'],
})
export class SiteMap implements AfterViewInit {
  private readonly siteService: SitesService = inject(SitesService);

  map!: L.Map;
  marker!: L.Circle;

  // lat!: number;
  // lon!: number;

  lat: number = 36.42222222;
  lon: number = 9.21833333;

  // this.siteService.getCoordinates().subscribe(
  //   data => {
  //     if (data.coordinates) {
  //       this.lat = data.coordinates.lat;
  //       this.lon = data.coordinates.lon;
  //     }
  //   }
  // )

  ngAfterViewInit() {
    // Create the map
    this.map = L.map('map').setView([this.lat, this.lon], 13);

    // Add tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);


    if (this.marker) {
    this.map.removeLayer(this.marker);
  }

  this.marker = L.circle([this.lat,this.lon], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 200
  }).addTo(this.map);
    
  }
}

