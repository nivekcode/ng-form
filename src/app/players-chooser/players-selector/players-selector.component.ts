import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-players-selector',
  templateUrl: './players-selector.component.html',
  styleUrls: ['./players-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PlayersSelectorComponent),
      multi: true
    }
  ]
})
export class PlayersSelectorComponent implements ControlValueAccessor, OnInit {

  show = false;
  selectedPlayer = '';
  players = ['Sergio Ramos', 'Cristiano Ronaldo', 'Lionel Messi'];

  private propagateChange;
  private propagateTouch;

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

  writeValue(value: any): void {
    this.selectedPlayer = value;
  }

  selectPlayer(player: string): void {
    this.selectedPlayer = player;
    this.show = false;
    this.propagateChange(this.selectedPlayer);
  }

}
