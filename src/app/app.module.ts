import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { UserOrdersComponent } from './pages/user/orders/user-orders/user-orders.component';
import { UserReleaseComponent } from './pages/user/user-release/user-release/user-release.component';
import { ProductDetailsComponent } from './pages/user/product-details/product-details.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard/admin-dashboard.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { CustomersDetailsComponent } from './admin/customers-details/customers-details.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'; 
@NgModule({
  declarations: [AppComponent, DataTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressBarModule,
    // Vex
    VexModule,
    CustomLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
