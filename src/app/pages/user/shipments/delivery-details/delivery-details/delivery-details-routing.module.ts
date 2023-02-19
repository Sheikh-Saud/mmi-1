import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { DeliveryDetailsComponent } from './delivery-details.component';


const routes: Routes = [
  {
    path: '',
    component: DeliveryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class DeliveryDetailsRoutingModule {
}
