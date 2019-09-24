import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UpdateOnComponent} from './update-on.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [UpdateOnComponent],
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
