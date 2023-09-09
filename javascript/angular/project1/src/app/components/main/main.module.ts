import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PendingComponent } from './pending/pending.component';
import { DoneComponent } from './done/done.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PendingComponent,
    DoneComponent,
    SearchComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    DashboardComponent,
    PendingComponent,
    DoneComponent,
    SearchComponent
  ],
  providers: [],
  bootstrap: []
})
export class MainModule { }