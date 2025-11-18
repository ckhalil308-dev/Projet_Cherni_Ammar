import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SitesService } from '../../services/sites-service';
import { Sites } from '../../model/sites';
import { Commentaires } from '../../model/commentaires';
import { DatePipe } from '@angular/common';
import { BCACPipe } from '../../pipe/bc-ac-pipe';
  
@Component({
  selector: 'app-site-selected',
  imports: [BCACPipe],
  templateUrl: './site-selected.html',
  styleUrl: './site-selected.css',
})
export class SiteSelected implements OnInit {
    site: Sites[]=[];
    galery:String[]=[];
    commentes:Commentaires[]=[]
    idSite:String='';
    sitePhoto:String='';
    siteName:string=''
  
    private siteService=inject(SitesService);
  router:Router=inject(Router);
  activatedRoute:ActivatedRoute=inject(ActivatedRoute)
   ngOnInit(): void {
     this.idSite=this.activatedRoute.snapshot.params['idsite'];
        this.siteService.getSites().subscribe({
        next: (data)=>{
          this.site=data.filter(site=>site.id==this.idSite);
          this.sitePhoto=this.site[0].thumbnail
          this.galery=this.site[0].gallery || [];  
          this.commentes=this.site[0].comments||[];
          this.siteName=this.site[0].title

            
        },
        error: (err)=>{
          console.error('Error fetching sites:', err);
        },
      });
   }
    returnToSites(){
      this.router.navigate(['/siteList'])
      
    }
   
   
 
   


}
