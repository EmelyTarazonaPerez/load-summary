import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadSummaryComponent } from './pages/load-summary/load-summary.component';

const routes: Routes = [
  {
    path:'', component: LoadSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadSummaryRoutingModule { }
