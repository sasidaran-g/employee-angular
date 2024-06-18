import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'firstpage',
    loadChildren: () =>
      import('./firstpage/firstpage.module').then((m) => m.FirstpageModule),
  },
  { path: '', redirectTo: 'firstpage', pathMatch: 'full' },
  {
    path: 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then((m) => m.EmployeeModule),
  },
  { path: 'firstpage/employee', redirectTo: 'employee', pathMatch: 'full' },
  {
    path: 'personal',
    loadChildren: () =>
      import('./personal/personal.module').then((m) => m.PersonalModule),
  },
  { path: 'employee/personal', redirectTo: 'personal', pathMatch: 'full' },
  {
    path: 'professional',
    loadChildren: () =>
      import('./professional/professional.module').then(
        (m) => m.ProfessionalModule
      ),
  },
  {
    path: 'employee/professional',
    redirectTo: 'professional',
    pathMatch: 'full',
  },
  {
    path: 'table',
    loadChildren: () =>
      import('./table/table.module').then((m) => m.TableModule),
  },
  { path: 'firstpage/table', redirectTo: 'table', pathMatch: 'full' },
  {
    path: 'personal-table',
    loadChildren: () =>
      import('./personal-table/personal-table.module').then(
        (m) => m.PersonalTableModule
      ),
  },
  {
    path: 'table/personal-table',
    redirectTo: 'personal-table',
    pathMatch: 'full',
  },
  {
    path: 'professional-table',
    loadChildren: () =>
      import('./professional-table/professional-table.module').then(
        (m) => m.ProfessionalTableModule
      ),
  },
  {
    path: 'table/professional-table',
    redirectTo: 'professional-table',
    pathMatch: 'full',
  },
  {
    path: 'personal-edit-form/:id',
    loadChildren: () =>
      import('./personal-edit-form/personal-edit-form.module').then(
        (m) => m.PersonalEditFormModule
      ),
  },
  {
    path: 'personal-edit-form/id',
    redirectTo: 'personal-edit-form/id',
    pathMatch: 'full',
  },
  {
    path: 'professional-edit-form/:id',
    loadChildren: () =>
      import('./professional-edit-form/professional-edit-form.module').then(
        (m) => m.ProfessionalEditFormModule
      ),
  },
  {
    path: 'professional-edit-form/id',
    redirectTo: 'professional-edit-form/id',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
