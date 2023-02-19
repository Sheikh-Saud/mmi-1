import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { ShipmentsComponent } from './shipments.component';


const routes: Routes = [
  {
    path: '',
    component: ShipmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ShipmentsRoutingModule {
}
