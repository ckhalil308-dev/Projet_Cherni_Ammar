import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Sites } from '../../../model/sites';
import { SitesService } from '../../../services/sites-service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-site',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './edit-site.html',
  styleUrl: './edit-site.css',
})
export class EditSite implements OnInit {
  router: Router = inject(Router)
  private snackbar: MatSnackBar = inject(MatSnackBar)
  siteForm!: FormGroup;
  readonly formBuilder: FormBuilder = inject(FormBuilder);
  sites: Sites[] = [];
  idSite:String='';
  private sitesService: SitesService = inject(SitesService);
  readonly http: HttpClient = inject(HttpClient);

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  

  ngOnInit() {
    this.sitesService.getSites().subscribe(
      data => {
        this.sites = data;
      }
    )
    this.siteForm = this.formBuilder.nonNullable.group({
      id: [''],
      title: ['',[Validators.required]],
      era: ['', [Validators.required]],
      address: ['', [Validators.required]],
      price: [0, [Validators.required]],
      creation_date: ['', [Validators.required]],
      rating: [0, [Validators.required]],
      openingHours: ['', [Validators.required]],
      visitorsPerYear: [0, [Validators.required]],
      description: ['', [Validators.required]],
      thumbnail: ['', [Validators.required]],
      gallery: [[]],
      open: [false]
    });

    const idSite = this.activatedRoute.snapshot.params['idsite'];
    if(idSite){
      this.sitesService.getSites().subscribe({
        next: (data)=>{
          console.log(data);
          this.sites=data.filter(site=>site.id==this.idSite);
          this.siteForm?.setValue(this.sites[0]);
          // this.sitesService.updateSite(idSite,data).subscribe({
    
          // })
        },
        error: (err)=>{
          console.error('Error fetching sites:', err);
        },
      });
    }
  }

  onSubmit() {
    this.siteForm.get('id')?.setValue(this.sites.length + 1);
    let s: Sites = this.siteForm.value;
    this.sitesService.addSite(s).subscribe(
      data => {
        console.log(data);
        this.sites.push(s);
        this.snackbar.open("site added successfully !", "close", {
          duration: 3000,
          verticalPosition: "top",
          horizontalPosition: "left",


        })

      }
    )
    this.router.navigate(["/admindash"])
  }

  onThumbnailSelected(e: any) {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('image', file);
    this.http.post<{ url: string }>('http://localhost:3000/upload', fd).subscribe(
      data => this.siteForm.get('thumbnail')?.setValue(data.url)
    )
  }

  onGallerySelected(e: any) {
    const files: File[] = Array.from(e.target.files);
    const urls: string[] = [];

    files.forEach(
      f => {
        const fd = new FormData();
        fd.append('image', f);
        this.http.post<{ url: string }>('http://localhost:3000/upload', fd).subscribe(
          data => {
            urls.push(data.url);
            if (urls.length === files.length) {
              this.siteForm.get('gallery')?.setValue(urls);
            }
          }
        )
      }
    )
  }
}
