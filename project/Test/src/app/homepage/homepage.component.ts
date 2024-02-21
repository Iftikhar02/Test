import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  form: FormGroup = this.fb.group({
    country: ['', Validators.required],
    city: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }


  onSave(): void {
    if (this.form && this.form.get('country') && this.form.get('city')) {
      const country = this.form.get('country')!.value;
      const city = this.form.get('city')!.value;
      window.prompt(`Selected Country: ${country}, Selected City: ${city}`, 'Check values:');
      
    }
  }
  }

