import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApproveFormComponent } from './components/approve-form/approve-form.component';

const routes: Routes = [
  {
    path: '',
    component: ApproveFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApproveRoutingModule {}
