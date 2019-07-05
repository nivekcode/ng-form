import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'reactive-form',
  template: `
    <form [formGroup]="reactiveForm">
      <el-counter formControlName="counter"></el-counter>
    </form>

    <h1>Value</h1>
    <pre>{{ reactiveForm.value | json }}</pre>
  `
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      counter: new FormControl(5)
    });
  }
}
