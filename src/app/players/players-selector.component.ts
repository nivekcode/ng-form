import {Component, forwardRef} from '@angular/core';
import {Player, PlayersService} from './players.service';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'players-selector',
  template: `
    <button (click)="getNextPlayer()">Get next player</button>
    <button (click)="getPreviousPlayer()">Get previous player</button>

    <!-- TODO kk: add ngIf else template for the player -->

    {{player | json}}
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PlayersSelectorComponent),
      multi: true
    }
  ]
})
export class PlayersSelectorComponent implements ControlValueAccessor {

  player: Player;
  propagateChange: (jerseyNumber: number) => {};

  constructor(private playersService: PlayersService) {
  }

  getNextPlayer(): void {
    this.player = this.playersService.getNextPlayer();
    this.propagateChange(this.player.jerseyNumber);
  }

  getPreviousPlayer(): void {
    this.player = this.playersService.getPreviousPlayer();
    this.propagateChange(this.player.jerseyNumber);
  }

  registerOnChange(onChangeFn: any): void {
    this.propagateChange = onChangeFn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(jerseyNumber: number): void {
    this.player = this.playersService.getPlayerByNumber(jerseyNumber);
  }
}
