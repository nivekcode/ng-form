import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormControlComponent } from './custom-form-control.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [CustomFormControlComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CustomFormControlComponent}
    ]),
    ReactiveFormsModule
  ]
})
export class CustomFormControlModule { }
