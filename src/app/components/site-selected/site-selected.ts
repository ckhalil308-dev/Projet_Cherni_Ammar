import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SitesService } from '../../services/sites-service';
import { Site } from '../../model/site';
import { Comment } from '../../model/comment';
import { year } from '../../pipe/year';
import { StarsPipe } from '../../pipe/stars-pipe';
import { SiteMap } from '../site-map/site-map';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-site-selected',
  imports: [year, StarsPipe, SiteMap, FormsModule, ReactiveFormsModule],
  templateUrl: './site-selected.html',
  styleUrl: './site-selected.css',
})
export class SiteSelected implements OnInit {
  private readonly siteService = inject(SitesService);
  private readonly router: Router = inject(Router);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  sites: Site[] = [];
  gallery: string[] = [];
  comments: Comment[] = [];
  idSite: string = '';
  sitePhoto: string = '';
  siteName: string = ''
  commentForm!: FormGroup;
  fb: FormBuilder = inject(FormBuilder);
  ngOnInit(): void {
    this.commentForm = this.fb.group({
      content: ['', [Validators.required]],
      author: ['', [Validators.required]],
      rating: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      commentId: [''],
      date: ['']
    })
    this.idSite = this.activatedRoute.snapshot.params['idsite'];
    this.siteService.getSites().subscribe(
      data => {
        this.sites = data.filter(site => site.id == this.idSite);
        this.gallery = this.sites[0].gallery || [];
        this.comments = this.sites[0].comments || [];
      });
  }

  returnToSites() {
    this.router.navigate(['/siteList'])
  }

  lat!: number;
  lon!: number;

  getCoords(name: string) {
    name = name.trim().replace(/ /g, '_');
    this.siteService.getCoordinates(name).subscribe(data => {
      if (data.coordinates) {
        this.lat = data.coordinates.lat;
        this.lon = data.coordinates.lon;
        console.log(this.lat, this.lon);
      } else {
        console.log("Coordinates not found.");
      }
    });

  }
  onSubmit() {
    this.commentForm.get('commentId')?.setValue((this.comments.length + 1).toString());
    const d = new Date();
    const formattedDate =
      d.getFullYear() +
      '-' +
      String(d.getMonth() + 1) +
      '-' +
      String(d.getDate());
    this.commentForm.get('date')?.setValue(formattedDate);
    let c: Comment = this.commentForm.value;
    this.siteService.addcomment(this.idSite, c).subscribe(
      data => {
        console.log(data); this.comments.push(c);
      },
      error => console.log('Error adding comment:', error)
    )
  }



  // error => console.log('Error adding comment:', error)

  isInvalidRating() {
    const price = this.commentForm.get('rating');
    return price && price.invalid && price.touched && price.dirty;
  }





}
