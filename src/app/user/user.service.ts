import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_KEY = '[user]';
  user: User | null = null;

  get isLogged(): boolean{
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) ||  '';
      JSON.parse(lsUser);
    } catch (error) {
      this.user = null;
    }
  }
  login(){
    this.user = {
      username: "petrancho",
      email: "petko@gmail.com",
      password: "123123123",
      _id: "asdasdasdasd"
    };
      localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }
  logout(){
    this.user = null;
    localStorage.removeItem(this.USER_KEY);
  }
}
