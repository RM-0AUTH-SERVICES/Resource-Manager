import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AccountSetupComponent } from './account-setup/account-setup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginAuthService } from './login/login-auth-service.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { OtpInputComponent } from './otp-input/otp-input.component';
import { PasswordSetupComponent } from './password-setup/password-setup.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FilledButtonComponent } from './Buttons/filled-button/filled-button.component';
import { StrokedButtonComponent } from './Buttons/stroked-button/stroked-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AccountSetupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HttpClientModule,
    ResetPasswordComponent,
    OtpInputComponent,
    PasswordSetupComponent,
    HeaderComponent,
    SideBarComponent,
    FilledButtonComponent,
    StrokedButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [LoginAuthService],
})
export class AppComponent {
  title = 'resource-manager';
}
