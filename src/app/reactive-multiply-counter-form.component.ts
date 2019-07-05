import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'reactive-multiply-counter-form',
  template: `
    <form [formGroup]="multiplyFormGroup">
      <multiply-counter formControlName="multipliedCounter"></multiply-counter>
    </form>
    <hr />
    {{ multiplyFormGroup.value | json }}
  `
})
export class ReactiveMultiplyCounterFormComponent {
  multiplyFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.multiplyFormGroup = this.fb.group({
      multipliedCounter: new FormControl(50)
    });
  }

}
