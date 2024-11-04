import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashboardLayoutComponent} from "./dashboard-layout/dashboard-layout.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {path:'login',component:LoginComponent,  canActivate:[AuthGuard]},
  {
    path: 'dashboard', component: DashboardLayoutComponent,
  canActivate:[AuthGuard],
    children: [
      {path: '', component: DashboardComponent}
    ]
  },
  {path:'dashboard',component:DashboardComponent},
  { path: '**', redirectTo: '/login' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
