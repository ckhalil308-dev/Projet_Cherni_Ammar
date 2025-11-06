import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SitesService } from '../../services/sites-service';
import { Sites } from '../../model/sites';

@Component({
  selector: 'app-site-selected',
  imports: [],
  templateUrl: './site-selected.html',
  styleUrl: './site-selected.css',
})
export class SiteSelected implements OnInit {
    site: Sites[]=[];
    g:String[]=[];
    idsite:string='';
    s:string='';
    private siteService=inject(SitesService);
  router:Router=inject(Router);
  activatedRoute:ActivatedRoute=inject(ActivatedRoute)
   ngOnInit(): void {
     this.idsite=this.activatedRoute.snapshot.params['idsite'];
          this.siteService.getSites().subscribe({
        next: (data)=>{
          this.site=data.filter(site=>site.id==this.idsite);
          this.s=this.site[0].imageUrl
          this.g=this.site[0].gallery || [];       

            
        },
        error: (err)=>{
          console.error('Error fetching sites:', err);
        },
      });
   }
 
   


}
