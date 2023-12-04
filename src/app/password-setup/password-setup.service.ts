// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class PasswordSetupService {
//   private apiUrl = '/api/v1/users/update-password';

//   constructor(private http: HttpClient) {}

//   updatePassword(
//     currentPassword: string,
//     newPassword: string
//   ): Observable<any> {
//     const body = {
//       current_password: currentPassword,
//       new_password: newPassword,
//     };

//     return this.http.put(this.apiUrl, body);
//   }
// }
