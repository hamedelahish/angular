import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { ProductListComponent } from './product-list/product-list.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {MatDividerModule} from "@angular/material/divider";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {cartReducer} from "./store/cart/cart.reducer";
import {MatBadgeModule} from "@angular/material/badge";
import { CartComponent } from './cart/cart.component';
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({

    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        HttpClientModule,
        MatDividerModule,
        StoreModule.forRoot({cart: cartReducer}),
        EffectsModule.forRoot([]),
        MatBadgeModule,
        MatPaginatorModule
    ],

  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DashboardLayoutComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
