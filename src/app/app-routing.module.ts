import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoulderDetailComponent } from './boulders/boulder-detail/boulder-detail.component';
import { BoulderListComponent } from './boulders/boulder-list/boulder-list.component';
import { GymsComponent } from './gyms/gyms.component';

const routes: Routes = [
  { path: 'gyms', component: GymsComponent },
  { path: 'boulders', component: BoulderListComponent },
  { path: 'boulders/:_id', component: BoulderDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
