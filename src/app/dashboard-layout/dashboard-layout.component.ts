import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {shareReplay} from "rxjs";

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  isLoggedIn$=this.authService.isLoggedIn$.pipe(shareReplay(1))
  constructor(private authService:AuthService ) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout()
  }
}
