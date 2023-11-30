import { Routes } from '@angular/router';
import { AccountSetupComponent } from './account-setup/account-setup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: 'account-setup', component: AccountSetupComponent },
  { path: '', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];
