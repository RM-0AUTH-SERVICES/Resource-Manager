import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideIllustrationComponent } from '../side-illustration/side-illustration.component';
import {
  FormGroup,
  Validators,
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginAuthService } from './login-auth-service.service';
import { AuthButtonComponent } from '../auth-button/auth-button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    SideIllustrationComponent,
    AuthButtonComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted: boolean = false;
  isRemembered = false;
  constructor(
    private authService: LoginAuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  get email(): AbstractControl {
    return this.loginForm.get('email')!;
  }
  get password(): AbstractControl {
    return this.loginForm.get('password')!;
  }
  getErrorMessage(control: AbstractControl): string {
    if (control.hasError('required')) {
      return 'This field is required';
    }
    if (control.hasError('email')) {
      return 'Invalid email address';
    }
    if (control.hasError('minlength')) {
      return `Password must be at least ${
        control.getError('minlength').requiredLength
      } characters`;
    }
    return '';
  }

  get cssClasses() {
    return {
      'input-has-error':
        (this.loginForm.get('email')?.touched &&
          this.loginForm.get('email')?.hasError('required')) ||
        this.email.hasError('minlength'),
    };
  }

  handleClick() {}
  hidePassword: boolean = true;
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  loginOnSubmit() {
    if (this.loginForm.valid) {
      this.authService
        .login({ ...this.loginForm.value, isRemebered: this.isRemembered })
        .subscribe({
          next: (data: any) => {
            if (data.accessToken) {
              localStorage.setItem('accessToken', data.accessToken);
            }
          },
          error: (err: any): void => {
            console.error(err);
            this.snackBar.open(
              'Login failed. Please check your credentials and try again',
              'close',
              {
                duration: 3000,
                panelClass: ['error-snackbar', 'custom-snackbar'],
              }
            );
          },
          complete: () => {
            console.log('');
          },
        });
      console.log({ ...this.loginForm.value, isRemebered: this.isRemembered });
    }
  }
}

// // .pipe(
//   tap((response: any) => {
//     localStorage.setItem('token', response.token);
//     console.log(response);
//   })
// (results) => {
//   if (results.success) {
//     console.log(results);
//     alert(results.message);
//   } else {
//     alert(results.message);
//   }
// })
