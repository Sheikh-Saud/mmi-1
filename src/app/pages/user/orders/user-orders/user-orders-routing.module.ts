import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { UserOrdersComponent } from './user-orders.component';


const routes: Routes = [
  {
    path: '',
    component: UserOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class UserOrderRoutingModule {
}
