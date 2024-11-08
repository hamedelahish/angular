import { Injectable } from '@angular/core';
import {BehaviorSubject,observable} from "rxjs";
import {userMock} from "../../content/content.mock";
import {IUserInfo} from "../../interfaces/auth.interface";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private router:Router) {
    this.checkLogin()
  }

  login(userInfo:IUserInfo) {
    if (userInfo.username === userMock.username && userInfo.password === userMock.password) {
      localStorage.setItem('token', userMock.token)
      this.isLoggedIn.next(true);
      this.router.navigate(['/dashboard'])
      return false
    }
    else
    {
    return true
    }
    }

    logout(){
      localStorage.removeItem('token')
      this.isLoggedIn.next(false)
      this.router.navigate(['/login'])
    }
    checkLogin(){
    const token =localStorage.getItem('token');
    this.isLoggedIn.next(!!token);
    }

}
