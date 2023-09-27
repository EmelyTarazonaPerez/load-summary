import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadSummaryModule } from './load-summary/load-summary.module';
import { BoxInfoComponent } from './load-summary/components/box-info/box-info.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadSummaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
