import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Sites } from '../../../model/sites';
import { SitesService } from '../../../services/sites-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-site',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './add-site.html',
  styleUrl: './add-site.css',
})
export class AddSite implements OnInit{
  siteForm!: FormGroup;
  readonly formBuilder : FormBuilder = inject(FormBuilder);
  sites:Sites[]=[];
  private sitesService:SitesService=inject(SitesService);
  readonly http:HttpClient=inject(HttpClient);

  ngOnInit(){
    this.sitesService.getSites().subscribe(
      data=>{
        this.sites=data;
      }
    )
    this.siteForm = this.formBuilder.nonNullable.group({
      id :[],
      title : ["Kerkouane",[Validators.required]],
      era : ["Punic",[Validators.required]],
      address : ["Kerkouane, Nabeul Governorate, Tunisia",[Validators.required]],
      price : [10,[Validators.required]],
      creation_date : ["-00500-01-01",[Validators.required]],
      rating : [4.4,[Validators.required]],
      openingHours : ["08:00 - 17:00",[Validators.required]],
      visitorsPerYear : [200000,[Validators.required]],
      description : ["Kerkouane is one of the best-preserved Punic cities in the Mediterranean. Unlike many other ancient towns in Tunisia, it was abandoned and never rebuilt by the Romans, giving a rare insight into Punic urban planning.",[Validators.required]],
      thumbnail : [""],
      gallery : [[]],
      open : [false]
    })
    
  }

  onSubmit() {
    this.siteForm.get('id')?.setValue(this.sites.length+1);
    let s:Sites=this.siteForm.value;
    this.sitesService.addSite(s).subscribe(
      data=>{
        console.log(data);
        this.sites.push(s);
      }
    )
    
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
          }
        )
      }
    )
  }
}
