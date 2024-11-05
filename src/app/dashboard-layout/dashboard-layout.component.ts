import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/services/auth/auth.service";
import {Observable, shareReplay} from "rxjs";
import {selectCartCount} from "../store/cart/cart.selectors";
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  isLoggedIn$ = this.authService.isLoggedIn$.pipe(shareReplay(1))
  cartCount$: Observable<number> | undefined;
  searchText: string = '';

  constructor(
    private authService: AuthService,
    private store: Store,
    private router: Router,

  ) {
  }

  ngOnInit(): void {
    this.cartCount$ = this.store.select(selectCartCount)



  }

  logout() {
    this.authService.logout()
  }

  search(event: any): void {
    if (event.key === 'Enter' || event.type === 'click') {
      this.searchText = event.target.value;
      if (this.searchText.length > 2) {
        this.router.navigate(['/dashboard'], {queryParams: {search: this.searchText}});
      }
    }
  }

  clearSearch(): void {
    this.searchText = '';
    this.router.navigate(['/dashboard']);

  }
}
