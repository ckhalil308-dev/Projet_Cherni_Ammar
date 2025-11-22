// import { AfterViewInit, Component, inject } from '@angular/core';
// import { SitesService } from '../../services/sites-service';
// import * as L from 'leaflet';

// @Component({
//   selector: 'app-site-map',
//   imports: [],
//   templateUrl: './site-map.html',
//   styleUrl: './site-map.css',
// })
// export class SiteMap implements AfterViewInit{
//   private readonly siteService:SitesService=inject(SitesService);
//   // lat:number=36.42222222 ;
//   // lon:number=9.21833333;

//   map!: L.Map;
//   marker?: L.Marker;
//   tileLayer?: L.TileLayer;

//   lat!: number;
//   lon!: number;

//   ngAfterViewInit() {
//     // Initialize empty map container
//     this.map = L.map('map').setView([0, 0], 2);
//   }

//   updateMap(lat: number, lon: number) {
//     this.lat = lat;
//     this.lon = lon;

//     // Set center
//     this.map.setView([lat, lon], 13);

//     // Load tiles only once
//     if (!this.tileLayer) {
//       this.tileLayer = L.tileLayer(
//         'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//         {
//           attribution: '© OpenStreetMap contributors'
//         }
//       ).addTo(this.map);
//     }

//     // Remove existing marker
//     if (this.marker) {
//       this.marker.remove();
//     }

//     // Create new marker
//     this.marker = L.marker([lat, lon])
//       .addTo(this.map)
//       .bindPopup("Vous êtes ici !")
//       .openPopup();
//   }

//   getCoords(name: string) {
//     name = name.trim().replace(/ /g, '_');

//     this.siteService.getCoordinates(name).subscribe(data => {
//       if (data.coordinates) {
//         this.updateMap(data.coordinates.lat, data.coordinates.lon);
//       } else {
//         console.log("Coordinates not found.");
//       }
//     });
//   }
// }

// //   map!: L.Map;
// //   marker!: L.Marker;
  
// //   lat!: number;
// //   lon!: number;

// //   ngAfterViewInit() {
// //     // Just create empty map (center later)
// //     this.map = L.map('map');
// //   }

// //   /** Call your coordinates function */
// //   updateMap(lat: number, lon: number) {
// //     this.lat = lat;
// //     this.lon = lon;

// //     // First initialization
// //     if (!this.map || !this.map.setView) return;

// //     if (!this.map.hasLayer as any) {
// //       this.map.setView([lat, lon], 13);

// //       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //         attribution: '© OpenStreetMap contributors'
// //       }).addTo(this.map);
// //     } else {
// //       this.map.setView([lat, lon], 13);
// //     }

// //     // Remove old marker
// //     if (this.marker) this.marker.remove();

// //     // Add new marker
// //     this.marker = L.marker([lat, lon])
// //       .addTo(this.map)
// //       .bindPopup("Vous êtes ici !")
// //       .openPopup();
// //   }
// //   getCoords(name: string) {
// //   name = name.trim().replace(/ /g, '_');

// //   this.siteService.getCoordinates(name).subscribe(data => {
// //     if (data.coordinates) {
// //       this.updateMap(data.coordinates.lat, data.coordinates.lon);
// //     }
// //   });
// // }

import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.html',
  styleUrls: ['./site-map.css'],
})
export class SiteMap implements AfterViewInit {
  

  map!: L.Map;
  marker!: L.Marker;

  lat = 36.42222222;
  lon = 9.21833333;

  ngAfterViewInit() {
    // Create the map
    this.map = L.map('map').setView([this.lat, this.lon], 13);

    // Add tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Add marker
    this.marker = L.marker([this.lat, this.lon])
      .addTo(this.map)
  }
}

