import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'solicitation',
    loadChildren:
      './modules/solicitation/solicitation.module#SolicitationModule',
  },
  {
    path: 'approve',
    loadChildren: './modules/approve/approve.module#ApproveModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
