import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LoginData } from '../modules/users/user-login/user-login.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'http://localhost:3333/users';

  constructor(private http: HttpClient) {}

  postAuthentication(data: LoginData): Observable<LoginData> {
    return this.http.post<LoginData>(this.apiUrl, data);
  }
}
