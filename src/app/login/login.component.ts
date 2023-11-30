import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideIllustrationComponent } from '../side-illustration/side-illustration.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { AuthButtonComponent } from '../auth-button/auth-button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, SideIllustrationComponent, AuthButtonComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
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

  handleClick() {}
}
