import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private userEmail: string = 'joseph.kwarteng@amalitech.com';

  getUserEmail(): string {
    return this.userEmail;
  }

  setUserEmail(email: string): void {
    this.userEmail = email;
  }
}
