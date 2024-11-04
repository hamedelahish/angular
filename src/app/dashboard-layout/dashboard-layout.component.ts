import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/services/auth/auth.service";
import {Observable, shareReplay} from "rxjs";
import {selectCartCount} from "../store/cart/cart.selectors";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  isLoggedIn$=this.authService.isLoggedIn$.pipe(shareReplay(1))
  cartCount$: Observable<number> | undefined;

  constructor(private authService:AuthService,private store:Store ) { }

  ngOnInit(): void {
    this.cartCount$=this.store.select(selectCartCount)
  }
  logout(){
    this.authService.logout()
  }
}
