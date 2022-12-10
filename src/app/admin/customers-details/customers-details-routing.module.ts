import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { CustomersDetailsComponent } from './customers-details.component';


const routes: Routes = [
  {
    path: '',
    component: CustomersDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class CustomerDetailsRoutingModule {
}
