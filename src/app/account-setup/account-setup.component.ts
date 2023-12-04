import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SideIllustrationComponent } from '../side-illustration/side-illustration.component';
import { AuthButtonComponent } from '../auth-button/auth-button.component';
import { CommonModule } from '@angular/common';
import { CustomValidators } from '../validators/noSpaceAllowed.validator';

@Component({
  selector: 'app-account-setup',
  standalone: true,
  imports: [
    CommonModule,
    AuthButtonComponent,
    SideIllustrationComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './account-setup.component.html',
  styleUrl: './account-setup.component.css',
})
export class AccountSetupComponent {
  reactiveForm: FormGroup;
  hidePassword: boolean = true;
  passwordStrength: string = '';
  passwordSuggestions: string[] = [];
  submitted: boolean = false;

  constructor(private router: Router) {
    this.reactiveForm = new FormGroup({
      // Use the custom validator for the firstName and lastName controls
      firstName: new FormControl('', [Validators.required, CustomValidators]),
      lastName: new FormControl('', [Validators.required, CustomValidators]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      profilePicture: new FormControl(''),
      phoneNumber: new FormControl('', [Validators.pattern(/^\d{10}$/)]),
    });
  }

  checkPasswordStrength() {
    const password = this.password?.value;

    // Reset strength and suggestions
    this.passwordStrength = '';
    this.passwordSuggestions = [];

    if (!password) {
      return;
    }

    // Define password criteria
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Check criteria
    if (password.length < minLength) {
      this.passwordStrength = 'Weak';
      this.passwordSuggestions.push(
        `Password should be at least ${minLength} characters.`
      );
    } else {
      const criteriaMet =
        hasUpperCase && hasLowerCase && (hasNumbers || hasSymbols);

      if (criteriaMet) {
        this.passwordStrength = 'Strong';
      } else {
        this.passwordStrength = 'Moderate';
        this.passwordSuggestions.push(
          'Include a mix of uppercase, lowercase, and numbers/symbols.'
        );
      }
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  // onSubmit() {
  //   if (this.accountSetupForm.valid) {
  //     this.router.navigate(['home']);
  //   }
  // }

  // Getters for form controls
  get firstName() {
    return this.reactiveForm.get('firstName');
  }

  get lastName() {
    return this.reactiveForm.get('lastName');
  }

  get email() {
    return this.reactiveForm.get('email');
  }

  get password() {
    return this.reactiveForm.get('password');
  }

  get profilePicture() {
    return this.reactiveForm.get('profilePicture');
  }

  get phoneNumber() {
    return this.reactiveForm.get('phoneNumber');
  }

  accountSetupOnSubmit() {
    this.submitted = true;
  }
}
