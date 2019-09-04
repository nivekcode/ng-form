import {Component, OnInit} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {Character, LotrCaracterService} from '../lotr-caracter.service';

@Component({
  selector: 'lotr-character-selector',
  templateUrl: './lotr-character-selector.component.html',
  styleUrls: ['./lotr-character-selector.component.css']
})
export class LotrCharacterSelectorComponent implements ControlValueAccessor, OnInit {

  public character: Character;

  constructor(private lotrCharacterService: LotrCaracterService) {
  }

  ngOnInit(): void {
    this.getNextCharacter();
  }

  getNextCharacter(): void {
    this.character = this.lotrCharacterService.getNextCharacter();
  }

  getPreviousCharacter(): void {
    this.character = this.lotrCharacterService.getPreviousCharacter();
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
