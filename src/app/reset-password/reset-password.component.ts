import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideIllustrationComponent } from '../side-illustration/side-illustration.component';
import { OtpInputComponent } from '../otp-input/otp-input.component';

import { EmailService } from './email.service';
import { Router } from '@angular/router';
import { AuthButtonComponent } from '../auth-button/auth-button.component';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    SideIllustrationComponent,
    OtpInputComponent,
    AuthButtonComponent,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent {
  // @Input() userEmail: string | undefined;
  userEmail: string = '';
  submitted: boolean = false;

  constructor(private emailService: EmailService, private router: Router) {}
  ngOnInit(): void {
    this.userEmail = this.emailService.getUserEmail();
  }

  changeUserEmail() {
    this.emailService.setUserEmail('newuser@example.com');
    this.userEmail = this.emailService.getUserEmail();
  }
  goBackToLogin() {
    this.router.navigate(['']);
  }
  otpOnSubmit() {
    this.submitted = true;
    this.router.navigate(['password-reset']);
  }
}
