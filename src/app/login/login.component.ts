import {Component, OnInit} from '@angular/core';
import {UserInfo} from "../shared/interfaces/auth.interface";
import {Router} from '@angular/router'
import {userMock} from "../shared/content/content.mock";

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

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  login(userInfo: UserInfo) {

    if (userInfo.username === userMock.username && userInfo.password === userMock.password) {
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('token', userMock.token)
      this.router.navigateByUrl('/dashboard')
    }

  }
}
