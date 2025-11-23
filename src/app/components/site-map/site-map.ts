
import { AfterViewInit, Component, inject, Input } from '@angular/core';
import { SitesService } from '../../services/sites-service';
import * as L from 'leaflet';

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.html',
  styleUrls: ['./site-map.css'],
})
export class SiteMap implements AfterViewInit {
  private readonly siteService: SitesService = inject(SitesService);

  map!: L.Map;
  marker!: L.Circle;
  @Input() name!: string;

  lat!: number;
  lon!: number;

  ngAfterViewInit() {

    this.name = this.name.trim().replace(/ /g, '_');
    this.siteService.getCoordinates(this.name).subscribe(data => {
      if (data.coordinates) {
        this.lat = data.coordinates.lat;
        this.lon = data.coordinates.lon;
        console.log(this.lat, this.lon);

        this.map = L.map('map').setView([this.lat, this.lon], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);

        if (this.marker) {
          this.map.removeLayer(this.marker);
        }

        this.marker = L.circle([this.lat, this.lon], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 200
        }).addTo(this.map);

      } else {
      
        console.log("Coordinates not found.");
      }
    });




  }
}

