import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router,CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem('token');

    if(token){
      if(state.url === '/login'){
        this.router.navigate(['/dashboard'])
        return false
      }else{
        return true
      }
      }
    else {
      if(state.url==='/login'){
        return true
      }
      else
      {
        this.router.navigate(['/login'])
        return false
      }
    }


  }

}
