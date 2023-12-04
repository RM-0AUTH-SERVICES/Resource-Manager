import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SideIllustrationComponent } from '../side-illustration/side-illustration.component';
import { Router } from '@angular/router';
import { ForgotPasswordService } from './forgot-password.service';
import { AuthButtonComponent } from '../auth-button/auth-button.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  templateUrl: './forgot-password.component.html',
  imports: [
    CommonModule,
    SideIllustrationComponent,
    AuthButtonComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router, private reset: ForgotPasswordService) {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }

  get cssClasses() {
    return {
      'input-has-error':
        this.forgotPasswordForm.get('email')?.touched &&
        this.forgotPasswordForm.get('email')?.hasError('required'),
    };
  }

  onSubmit() {
    this.submitted = true;

    if (this.forgotPasswordForm.valid) {
      const email = this.email?.value;
      this.reset.forgotPassword(email).subscribe({
        next: (res) => this.router.navigate(['reset-password']),
      });
    }
  }

  goBackToLogin() {
    this.router.navigate(['']);
  }
}
