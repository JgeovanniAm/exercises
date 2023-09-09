import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { app_routing } from '../../app-routing';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component'
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { CardfoundComponent } from './cardfound/cardfound.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FormComponent,
    ModalComponent,
    TaskComponent,
    CardfoundComponent,
  ],
  imports: [
    CommonModule,
    app_routing,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FormComponent,
    ModalComponent,
    TaskComponent,
    CardfoundComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }