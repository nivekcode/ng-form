import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-custom-form-control',
  templateUrl: './custom-form-control.component.html',
  styleUrls: ['./custom-form-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomFormControlComponent),
      multi: true
    }
  ]
})
export class CustomFormControlComponent implements OnInit, ControlValueAccessor {

  propagateChange: (value: any) => {};
  propagateTouch: (value: any) => {};
  value: string;

  constructor() {
  }

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  valueChanged(event) {
    this.value = event.target.value;
    this.propagateChange(this.value);
  }

  blured() {
    this.propagateChange(this.value);
    this.propagateTouch(this.value);
  }

}
