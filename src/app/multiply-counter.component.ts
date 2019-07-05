import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'multiply-counter',
  template: `
    <form [formGroup]="testGroup">
      <el-counter formControlName="counter"></el-counter>
    </form>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiplyCounterComponent),
      multi: true
    }
  ]
})
export class MultiplyCounterComponent implements OnInit, ControlValueAccessor {

  testGroup: FormGroup;

  propagateChange = (value: any) => {};

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.testGroup = this.fb.group({
      counter: new FormControl()
    });
    this.testGroup.get('counter').valueChanges
      .subscribe((value) => {
        this.propagateChange(value);
      });
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: any): void {
    this.testGroup.get('counter').patchValue(value);
  }
}
