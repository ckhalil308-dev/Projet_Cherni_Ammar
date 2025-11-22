import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SitesService } from '../../services/sites-service';
import { Site } from '../../model/site';
import { Comment } from '../../model/comment';
import { year } from '../../pipe/year';
import { StarsPipe } from '../../pipe/stars-pipe';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-site-selected',
  imports: [ year,StarsPipe],
  templateUrl: './site-selected.html',
  styleUrl: './site-selected.css',
})
export class SiteSelected implements OnInit {
  private readonly siteService = inject(SitesService);
  private readonly router: Router = inject(Router);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  sites: Site[] = [];
  galery: String[] = [];
  commentes: Comment[] = [];
  idSite: String = '';
  sitePhoto: String = '';
  siteName: string = ''


  ngOnInit(): void {
    this.idSite = this.activatedRoute.snapshot.params['idsite'];
    this.siteService.getSites().subscribe(
      data => {
        this.sites = data.filter(site => site.id == this.idSite);
        this.sitePhoto = this.sites[0].thumbnail
        this.galery = this.sites[0].gallery || [];
        this.commentes = this.sites[0].comments || [];
        this.siteName = this.sites[0].title;
    });
  }

  returnToSites() {
    this.router.navigate(['/siteList'])
  }

  lat!:string;
  lon!:string;

  afficher(name:string){
    name = name.trim().replace(/ /g, '_');
    this.siteService.getWiki(name).subscribe(data => {

      if (data.coordinates) {
        console.log(data.coordinates);
        this.lat = data.coordinates.lat;
        this.lon = data.coordinates.lon;
      } else {
        console.log("Coordinates not found.");
      }
    });
  }




}
