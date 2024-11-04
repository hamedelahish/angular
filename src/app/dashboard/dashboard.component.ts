import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {shareReplay} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLoggedIn$=this.authService.isLoggedIn$.pipe(shareReplay(1))
  constructor(private authService:AuthService ) { }

  ngOnInit(): void {
    this.isLoggedIn$.subscribe(isLoggedIn => {
      console.log('User is logged in:', isLoggedIn);
    });
  }

  logout(){
    this.authService.logout()
  }

}
