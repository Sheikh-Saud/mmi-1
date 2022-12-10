import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { UserReleaseComponent } from './user-release.component';


const routes: Routes = [
  {
    path: '',
    component: UserReleaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class UserReleaseRoutingModule {
}
