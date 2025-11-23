import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SitesService } from '../../../services/sites-service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Site } from '../../../model/site';

@Component({
  selector: 'app-edit-site',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './edit-site.html',
  styleUrl: './edit-site.css',
})
export class EditSite implements OnInit {
  private readonly router: Router = inject(Router);
  private readonly snackbar: MatSnackBar = inject(MatSnackBar);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private readonly sitesService: SitesService = inject(SitesService);
  private readonly http: HttpClient = inject(HttpClient);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  sites: Site[] = [];
  idSite:String='';
  siteForm!: FormGroup;
  
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
      isBC: [],
      rating: [0, [Validators.required]],
      openingHours: ['', [Validators.required]],
      visitorsPerYear: [0, [Validators.required]],
      description: ['', [Validators.required]],
      thumbnail: ['', [Validators.required]],
      gallery: this.formBuilder.array([]),
      open: []
    });

    const idSite = this.activatedRoute.snapshot.params['idsite'];
    if(idSite){
      this.sitesService.getSites().subscribe({
        next: (data)=>{
          console.log(data);
          this.sites=data.filter(site=>site.id==idSite);
          console.log(this.sites);
          this.siteForm?.patchValue(this.sites[0]);
        },
        error: (err)=>{
          console.error('Error fetching sites:', err);
        },
      });
    }
  }

  onSubmit() {
    const idSite = this.activatedRoute.snapshot.params['idsite'];
    const site: Site = this.siteForm.value;
    this.sitesService.updateSite(idSite,site).subscribe(
      data=>{
        console.log(data);
        this.snackbar.open("site edited successfully !" ,"close" ,{
          duration:3000,
           verticalPosition: "top",
           horizontalPosition: "left",
        })
      }

    )
    this.router.navigate(["/admindash"]);
  }

  onThumbnailSelected(e: any) {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('image', file);
    this.http.post<{ url: string }>('http://localhost:3000/upload', fd).subscribe(
      data => this.siteForm.get('thumbnail')?.setValue(data.url)
    )
  }

  
  public get gallery(){
    return this.siteForm.get('gallery') as FormArray;
  }

  addGallery(){
    this.gallery.push(this.formBuilder.control(''));
  }
  onGallerySelected(event: any, index: number) {
  const file = event.target.files[0];
  if (!file) return;

  const fd = new FormData();
  fd.append('image', file);

  this.http.post<{ url: string }>('http://localhost:3000/upload', fd)
    .subscribe(res => {
      this.gallery.at(index).setValue(res.url);
    });
}
    isInvalidTitle() {
    const title = this.siteForm.get('title');
    return title && title.invalid && title.touched;
  }
  isInvalidEra() {
    const era = this.siteForm.get('era');
    return era && era.invalid && era.touched;
  }
  isInvalidAddress() {
    const address = this.siteForm.get('address');
    return address && address.invalid && address.touched;
  }
  isInvalidPrice() {
    const control = this.siteForm.get('price');
    return control && control.invalid && control.touched;
  }
  isInvalidCreationDate() {
    const control = this.siteForm.get('creation_date');
    return control && control.invalid && control.touched;
  }
  isInvalidRating() {
    const price = this.siteForm.get('rating');
    return price && price.invalid && price.touched;
  }
  isInvalidHours() {
    const hours = this.siteForm.get('openingHours');
    return hours && hours.invalid && hours.touched;
  }
  isInvalidVisitors() {
    const visits = this.siteForm.get('visitorsPerYear');
    return visits && visits.invalid && visits.touched;
  }
  isInvalidDescription() {
    const description = this.siteForm.get('description');
    return description && description.invalid && description.touched;
  }
}
