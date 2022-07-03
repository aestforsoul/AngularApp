import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(environment.UserAPIBaseUrl);
  }

  deleteUser(user: User): Observable<User> {
    const url = `${environment.UserAPIBaseUrl}/${user.id}`;
    return this.http.delete<User>(url, httpOptions);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(environment.UserAPIBaseUrl, user, httpOptions);
  }
}
