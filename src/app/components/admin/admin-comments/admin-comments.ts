import { Component, inject, OnInit } from '@angular/core';
import { SitesService } from '../../../services/sites-service';
import { Site } from '../../../model/site';
import { Comment } from '../../../model/comment';

@Component({
  selector: 'app-admin-comments',
  imports: [],
  templateUrl: './admin-comments.html',
  styleUrl: './admin-comments.css',
})
export class AdminComments implements OnInit{
  private readonly siteservice:SitesService=inject(SitesService);
  siteList:Site[]=[];

  ngOnInit(): void {
      this.siteservice.getSites().subscribe(
        data=>this.siteList=data
      )
  }

  onDeleteComment(siteId: string, comment: Comment):void{
    if (confirm(`Are you sure you want to delete "${comment.content}"?`)) {
    this.siteservice.deleteComment(siteId, comment.commentId).subscribe(
      () => {
        const site = this.siteList.find(s => s.id === siteId);
        if (site){
          site.comments=site.comments?.filter(c => c.commentId !== comment.commentId);
        }
        }
    );
  }
  }
}
