import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Site } from '../../../model/site';
import { SitesService } from '../../../services/sites-service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-site',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './add-site.html',
  styleUrl: './add-site.css',
})
export class AddSite implements OnInit {
  private readonly router: Router = inject(Router)
  private readonly snackbar: MatSnackBar = inject(MatSnackBar)
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly sitesService: SitesService = inject(SitesService);
  private readonly http: HttpClient = inject(HttpClient);
  sites: Site[] = [];
  siteForm!: FormGroup;

  ngOnInit() {
    this.sitesService.getSites().subscribe(
      data => {
        this.sites = data;
      }
    )

    this.siteForm = this.fb.nonNullable.group({
      id: [],
      title: ["Kerkouane", [Validators.required]],
      era: ["Punic", [Validators.required]],
      address: ["Kerkouane, Nabeul Governorate, Tunisia", [Validators.required]],
      price: [10, [Validators.required, Validators.min(0.1)]],
      creation_date: ["00500-01-01", [Validators.required]],
      isBC: [false],
      rating: [4.4, [Validators.required, Validators.min(0), Validators.max(5)]],
      openingHours: ["08:00 - 17:00", [Validators.required, Validators.pattern("^([01][0-9]|2[0-3]):([0-5][0-9]) - ([01][0-9]|2[0-3]):([0-5][0-9])$")]],
      visitorsPerYear: [200000, [Validators.required, Validators.min(0)]],
      description: ["Kerkouane is one of the best-preserved Punic cities in the Mediterranean. Unlike many other ancient towns in Tunisia, it was abandoned and never rebuilt by the Romans, giving a rare insight into Punic urban planning.", [Validators.required]],
      thumbnail: ["", Validators.required],
      gallery: this.fb.array([]),
      open: [false]
    })

  }

  public get gallery(){
    return this.siteForm.get('gallery') as FormArray;
  }

  addGallery(){
    this.gallery.push(this.fb.control(''));
  }

  onSubmit() {
    this.siteForm.get('id')?.setValue((this.sites.length + 1).toString());
    let s: Site = this.siteForm.value;
    this.sitesService.addSite(s).subscribe(
      data => {
        console.log(data);
        this.sites.push(s);
        this.snackbar.open("site added successfully !", "close", {
          duration: 3000,
          verticalPosition: "top",
          horizontalPosition: "left"
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
