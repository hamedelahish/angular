import {Component, OnInit} from '@angular/core';
import {IUserInfo} from "../shared/interfaces/auth.interface";
import {AuthService} from "../shared/services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userInfo: IUserInfo = {
    username: '',
    password: ''
  }
  loginError=false
  isLoggedIn$=this.authService.isLoggedIn$
  constructor(private authService:AuthService) {
  }

  ngOnInit(): void {
    this.authService.checkLogin()
  }

  login(userInfo: IUserInfo) {
    this.loginError =this.authService.login(userInfo)

  }
}
