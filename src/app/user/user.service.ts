import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  USER_KEY = '[user]';
  user: User | null = null;

  get isLogged(): boolean{
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) ||  '';
      JSON.parse(lsUser);
    } catch (error) {
      this.user = null;
    }
  }
  login(email: string, password: string){
      return this.http
        .post<User>('/api/login', {email, password})
        .pipe(tap(user => this.user$$.next(user)))
  }
  logout(){
    this.user = null;
    localStorage.removeItem(this.USER_KEY);
  }

  register(username: string, email: string, password: string, rePassword: string){
      return this.http
        .post<User>('/api/register', {username, email, password, rePassword})
        .pipe(tap(user => this.user$$.next(user)))
  }


}
