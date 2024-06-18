import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalEditFormComponent } from './personal-edit-form.component';

const routes: Routes = [{ path: '', component: PersonalEditFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalEditFormRoutingModule {}
