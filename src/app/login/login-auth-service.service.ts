import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserData } from '../user-data';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthService {
  apiUrl = 'https://810d-196-61-44-226.ngrok-free.app/api/v1';

  constructor(private http: HttpClient, private router: Router) {}

  login(userCredentials: UserData): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/login`, userCredentials);
  }
}
