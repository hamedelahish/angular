import {Component, OnInit} from '@angular/core';
import {UserInfo} from "../shared/interfaces/auth.interface";
import {userMock} from "../shared/content/content.mock";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userInfo: UserInfo = {
    username: '',
    password: ''
  }
  isLoggedIn$=this.authService.isLoggedIn$
  constructor(private authService:AuthService) {
  }

  ngOnInit(): void {
    this.authService.checkLogin()
  }

  login(userInfo: UserInfo) {
    this.authService.login(userInfo)
  }
}
