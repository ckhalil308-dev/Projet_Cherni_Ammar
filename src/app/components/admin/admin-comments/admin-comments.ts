import { Component, inject, OnInit } from '@angular/core';
import { SitesService } from '../../../services/sites-service';
import { Commentaires } from '../../../model/commentaires';
import { Sites } from '../../../model/sites';

@Component({
  selector: 'app-admin-comments',
  imports: [],
  templateUrl: './admin-comments.html',
  styleUrl: './admin-comments.css',
})
export class AdminComments implements OnInit{
  siteservice:SitesService=inject(SitesService);
  siteList:Sites[]=[];

  ngOnInit(): void {
      this.siteservice.getSites().subscribe(
        data=>this.siteList=data
      )
  }
}
