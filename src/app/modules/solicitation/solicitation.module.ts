import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SolicitationRoutingModule } from './solicitation-routing.module';

import { SolicitationFormComponent } from './components/solicitation-form/solicitation-form.component';

@NgModule({
  declarations: [SolicitationFormComponent],
  imports: [
    CommonModule,
    SolicitationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class SolicitationModule {}
