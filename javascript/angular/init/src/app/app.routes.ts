import { RouterModule, Routes } from '@angular/router';
// routerModule Routes : type ts
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { IdComponent } from './pages/id/id.component';

const APP_ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'content/:id',
        component: IdComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
]

export const app_routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });