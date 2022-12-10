import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { CustomersListComponent } from './customers-list.component';


const routes: Routes = [
  {
    path: '',
    component: CustomersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class CustomerListRoutingModule {
}
