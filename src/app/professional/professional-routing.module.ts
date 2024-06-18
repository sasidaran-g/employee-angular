import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalComponent } from './professional.component';

const routes: Routes = [{ path: '', component: ProfessionalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessionalRoutingModule {}
