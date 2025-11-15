import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-site',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './add-site.html',
  styleUrl: './add-site.css',
})
export class AddSite implements OnInit{
  siteForm!: FormGroup;
  readonly formBuilder : FormBuilder = inject(FormBuilder);

  ngOnInit(){
    this.siteForm = this.formBuilder.nonNullable.group({
      title : [],
      era : [],
      address : [],
      price : [],
      creation_date : [],
      rating : [],
      openingHours : [],
      visitorsPerYear : [],
      description : [],
      thumbnail : [],
      gallery : [],
      open : []
    })
    
  }

  onSubmit() {
    console.warn(this.siteForm.value);
  }

}
