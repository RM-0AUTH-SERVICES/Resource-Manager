import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideIllustrationComponent } from '../side-illustration/side-illustration.component';
// import { PasswordSetupService } from './password-setup.service';
import { HttpClient } from '@angular/common/http';
import { AuthButtonComponent } from '../auth-button/auth-button.component';

@Component({
  selector: 'app-password-setup',
  standalone: true,
  imports: [CommonModule, SideIllustrationComponent, AuthButtonComponent],
  templateUrl: './password-setup.component.html',
  styleUrl: './password-setup.component.css',
})
export class PasswordSetupComponent {
  currentPassword: string = '';
  newPassword: string = '';

  constructor() {} // private http: HttpClient // private passwordSetupService: PasswordSetupService,

  handleClick() {}
  hidePassword: boolean = true;
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  // updatePassword(currentPassword: string, newPassword: string): void {
  //   this.passwordSetupService
  //     .updatePassword(currentPassword, newPassword)
  //     .subscribe({
  //       next: (response) => {
  //         console.log('Password updated successfully:', response);
  //         // Handle success, e.g., show a success message to the user
  //       },
  //       error: (error) => {
  //         console.error('Error updating password:', error);
  //         // Handle error, e.g., show an error message to the user
  //       },
  //     });
  // }
}
