import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UpdateOnComponent} from './update-on.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomFormControlComponent } from './custom-form-control/custom-form-control.component';

@NgModule({
  declarations: [UpdateOnComponent, CustomFormControlComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: UpdateOnComponent
    }]),
    ReactiveFormsModule
  ]
})
export class UpdateOnModule {
}
