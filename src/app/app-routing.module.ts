import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoulderListComponent } from './boulders/boulder-list/boulder-list.component';
import { GymsComponent } from './gyms/gyms.component';

const routes: Routes = [
  { path: 'gyms', component: GymsComponent },
  { path: 'boulders', component: BoulderListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
