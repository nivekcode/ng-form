import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'el-counter',
  template: `
    <button type="button" (click)="increment()">Increment</button>
    {{ counterValue }}
    <button type="button" (click)="decrement()">Decrement</button>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterComponent),
      multi: true
    }
  ]
})
export class CounterComponent implements ControlValueAccessor {

  @Input()
  counterValue = 0;

  propagateChange: (value: any) => {};

  increment(): void {
    this.counterValue++;
    this.propagateChange(this.counterValue);
  }

  decrement(): void {
    this.counterValue--;
    this.propagateChange(this.counterValue);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: any): void {
    this.counterValue = value;
  }
}
