import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalEditFormComponent } from './professional-edit-form.component';

const routes: Routes = [{ path: '', component: ProfessionalEditFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessionalEditFormRoutingModule {}
