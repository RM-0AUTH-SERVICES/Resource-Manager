import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForgotPassword } from '../forgot-password';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://542b-196-61-44-226.ngrok-free.app';

  forgotPassword(forgotPassword: ForgotPassword): Observable<any> {
    const forgotPasswordUrl = `${this.apiUrl}/forgot-password`;
    return this.http.post(forgotPasswordUrl, forgotPassword);
  }
}
