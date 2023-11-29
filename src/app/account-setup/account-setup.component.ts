import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-setup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-setup.component.html',
  styleUrl: './account-setup.component.css',
})
export class AccountSetupComponent {
  accountSetupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.accountSetupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      profilePicture: [''],
      phoneNumber: ['', Validators.pattern(/^\d{10}$/)],
    });
  }

  onSubmit() {
    if (this.accountSetupForm.valid) {
      const userData = this.accountSetupForm.value;
      // Call a service method to complete the user registration
      // this.userService.completeRegistration(userData).subscribe(response => {
      //   // Handle success
      // }, error => {
      //   // Handle error
      // });
    }
  }
}
