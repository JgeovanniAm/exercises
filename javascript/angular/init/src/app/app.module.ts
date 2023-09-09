import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// router
import { app_routing } from './app.routes';
// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { IdComponent } from './pages/id/id.component';
import { CounterWrapComponent } from './components/counter-wrap/counter-wrap.component';
import { CounterPComponent } from './components/counter-p/counter-p.component';
import { BtnChildComponent } from './components/btn-child/btn-child.component';

@NgModule({
  declarations: [ // al my components
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    IdComponent,
    CounterWrapComponent,
    CounterPComponent,
    BtnChildComponent,
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [ // all my services

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
