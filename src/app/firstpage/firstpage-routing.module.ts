import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage.component';

const routes: Routes = [{ path: '', component: FirstpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstpageRoutingModule {}
