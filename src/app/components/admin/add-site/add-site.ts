import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
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
export class AddSite implements OnInit{
  private readonly router:Router=inject(Router)
  private readonly snackbar:MatSnackBar=inject(MatSnackBar)
  private readonly fb : FormBuilder = inject(FormBuilder);
  private readonly sitesService:SitesService=inject(SitesService);
  private readonly http:HttpClient=inject(HttpClient);
  sites:Site[]=[];
  siteForm!: FormGroup;
  
  ngOnInit(){
    this.sitesService.getSites().subscribe(
      data=>{
        this.sites=data;
      }
    )
    
    this.siteForm = this.fb.nonNullable.group({
      id :[],
      title : ["Kerkouane",[Validators.required]],
      era : ["Punic",[Validators.required]],
      address : ["Kerkouane, Nabeul Governorate, Tunisia",[Validators.required]],
      price : [10,[Validators.required]],
      creation_date : ["00500-01-01",[Validators.required]],
      isBC : [false],
      rating : [4.4,[Validators.required, Validators.min(0), Validators.max(5)]],
      openingHours : ["08:00 - 17:00",[Validators.required, Validators.pattern("^([01][0-9]|2[0-3]):([0-5][0-9]) - ([01][0-9]|2[0-3]):([0-5][0-9])$")]],
      visitorsPerYear : [200000,[Validators.required]],
      description : ["Kerkouane is one of the best-preserved Punic cities in the Mediterranean. Unlike many other ancient towns in Tunisia, it was abandoned and never rebuilt by the Romans, giving a rare insight into Punic urban planning.",[Validators.required]],
      thumbnail : ["",Validators.required],
      gallery :FormArray,
      open : [false]
    })
    
  }

  onSubmit() {
    this.siteForm.get('id')?.setValue(this.sites.length+1);
    let s:Site=this.siteForm.value;
    this.sitesService.addSite(s).subscribe(
      data=>{
        console.log(data);
        this.sites.push(s);
        this.snackbar.open("site added successfully !" ,"close" ,{
          duration:3000,
          verticalPosition: "top",
          horizontalPosition: "left"
        })
      }
    ) 
    this.router.navigate(["/admindash"])
  }

  onThumbnailSelected(e: any){
    const file=e.target.files[0];
    const fd= new FormData();
    fd.append('image',file);
    this.http.post<{url: string}>('http://localhost:3000/upload',fd).subscribe(
      data=>this.siteForm.get('thumbnail')?.setValue(data.url)
    )
  }

  onGallerySelected(e: any){
    const files:File[]=Array.from(e.target.files);
    const urls:string[]=[];

    files.forEach(
      f=>{
        const fd=new FormData();
        fd.append('image',f);
        this.http.post<{url:string}>('http://localhost:3000/upload',fd).subscribe(
          data=>{
            urls.push(data.url);
            if(urls.length===files.length){
              this.siteForm.get('gallery')?.setValue(urls);
            }
          })
      })
  }
  isInvalidRating(){
    const price= this.siteForm.get('rating');
    return price && price.invalid && price.touched;
  }
  isInvalidHours(){
    const hours=this.siteForm.get('openingHours');
    return hours && hours.invalid && hours.touched;
  }
}
