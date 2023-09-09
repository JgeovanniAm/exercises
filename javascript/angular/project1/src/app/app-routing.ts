import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { PendingComponent } from './components/main/pending/pending.component';
import { DoneComponent } from './components/main/done/done.component';
import { SearchComponent } from './components/main/search/search.component';

const APP_ROUTES: Routes = [
  {
    path:'',
    component: DashboardComponent
  },
  {
    path:'pending',
    component: PendingComponent,
  },
  {
    path:'search',
    component: SearchComponent,
  },
  {
    path:'done',
    component: DoneComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
  },
]

export const app_routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });
