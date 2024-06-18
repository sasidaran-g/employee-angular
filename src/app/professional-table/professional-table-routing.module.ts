import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalTableComponent } from './professional-table.component';

const routes: Routes = [{ path: '', component: ProfessionalTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessionalTableRoutingModule {}
