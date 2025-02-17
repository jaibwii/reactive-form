import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm: FormGroup;
  formSubmitted: boolean = false;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      name: new FormControl('', [Validators.required]),
      contactNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.formSubmitted = true;
      console.log('Form Submitted.', this.loginForm.value);
    } else {
      console.log('Form is invalid.');
    }
  }
}