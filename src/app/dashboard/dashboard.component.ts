import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/services/auth/auth.service";
import {shareReplay} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private authService:AuthService ) { }

  ngOnInit(): void {
    // this.isLoggedIn$.subscribe(isLoggedIn => {
    //   console.log('User is logged in:', isLoggedIn);
    // });
  }



}
