import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxInfoComponent } from './components/box-info/box-info.component';
import { LoadSummaryRoutingModule } from './load-summary-routing.module';
import { LoadSummaryComponent } from './pages/load-summary/load-summary.component';
import { HeadComponent } from './components/head/head.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    LoadSummaryComponent,
    BoxInfoComponent,
    HeadComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    LoadSummaryRoutingModule
  ]
})
export class LoadSummaryModule { }
