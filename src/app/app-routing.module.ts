import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymsComponent } from './gyms/gyms.component';

const routes: Routes = [{ path: 'gyms', component: GymsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
