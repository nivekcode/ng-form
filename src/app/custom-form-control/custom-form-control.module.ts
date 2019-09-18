import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormControlComponent } from './custom-form-control.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [CustomFormControlComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CustomFormControlComponent}
    ]),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomFormControlModule { }
