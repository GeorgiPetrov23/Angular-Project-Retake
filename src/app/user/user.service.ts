import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<User | null>(null);
  private user$ = this.user$$.asObservable();

  USER_KEY = '[user]';
  user: User | null = null;

  get isLogged(): boolean{
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.user$.subscribe((user) => {
      this.user = user;
    })
  }
  login(email: string, password: string){
      return this.http
        .post<User>('/api/login', {email, password})
        .pipe(tap(user => this.user$$.next(user)))
  }

  logout(){
    return this.http.post('/api/logout', {})
    .pipe(tap((user) => this.user$$.next(null)));
  }

  register(username: string, email: string, password: string, rePassword: string){
      return this.http
        .post<User>('/api/register', {username, email, password, rePassword})
        .pipe(tap(user => this.user$$.next(user)))
  }

  getProfile(){
    return this.http.get<User>('/api/users/profile')
    .pipe(tap(user => this.user$$.next(user)))
  }
}
