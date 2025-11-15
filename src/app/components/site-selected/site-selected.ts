import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SitesService } from '../../services/sites-service';
import { Sites } from '../../model/sites';
import { Commentaires } from '../../model/commentaires';

@Component({
  selector: 'app-site-selected',
  imports: [],
  templateUrl: './site-selected.html',
  styleUrl: './site-selected.css',
})
export class SiteSelected implements OnInit {
    site: Sites[]=[];
    galery:String[]=[];
    commentes:Commentaires[]=[]
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
          this.s=this.site[0].thumbnail
          this.galery=this.site[0].gallery || [];  
          this.commentes=this.site[0].comments||[];

            
        },
        error: (err)=>{
          console.error('Error fetching sites:', err);
        },
      });
   }
 
   


}
