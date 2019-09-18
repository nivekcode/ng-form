import { Component, OnInit } from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-players-selector',
  templateUrl: './players-selector.component.html',
  styleUrls: ['./players-selector.component.css']
})
export class PlayersSelectorComponent implements ControlValueAccessor, OnInit {

  show = false;
  selectedPlayer = '';
  players = ['Sergio Ramos', 'Cristiano Ronaldo', 'Lionel Messi'];

  constructor() { }

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }

}
