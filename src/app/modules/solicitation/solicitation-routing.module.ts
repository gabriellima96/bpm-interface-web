import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitationFormComponent } from './components/solicitation-form/solicitation-form.component';

const routes: Routes = [
  {
    path: '',
    component: SolicitationFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitationRoutingModule {}
