import { ApproveRoutingModule } from './approve-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApproveFormComponent } from './components/approve-form/approve-form.component';

@NgModule({
  declarations: [ApproveFormComponent],
  imports: [CommonModule, ApproveRoutingModule],
})
export class ApproveModule {}
