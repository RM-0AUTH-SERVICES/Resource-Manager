import { Routes } from '@angular/router';
import { AccountSetupComponent } from './account-setup/account-setup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PasswordSetupComponent } from './password-setup/password-setup.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'account-setup', component: AccountSetupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'password-setup', component: PasswordSetupComponent },
];
