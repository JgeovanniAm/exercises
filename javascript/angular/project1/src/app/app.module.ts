import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// modules
import { app_routing } from './app-routing';
import { SharedModule } from './components/shared/shared.module';
import { MainModule } from './components/main/main.module';
// components
import { AppComponent } from './app.component';
import { TaskService } from './services/task.service';
// services

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
    MainModule,
    SharedModule,
  ],
  providers: [
    TaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
