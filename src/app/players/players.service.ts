import {Injectable} from '@angular/core';

export interface Player {
  firstname: string;
  name: string;
  jerseyNumber: number;
}

@Injectable()
export class PlayersService {

  private players = [
    {firstname: 'Sergio', name: 'Ramos', jerseyNumber: 4},
    {firstname: 'Eden', name: 'Hazard', jerseyNumber: 7},
    {firstname: 'Daniel', name: 'Carvajal', jerseyNumber: 2},
    {firstname: 'Luca', name: 'Modric', jerseyNumber: 10},
    {firstname: 'Karim', name: 'Benzema', jerseyNumber: 9}
  ];
  private index = -1;

  public getPlayerByNumber(jerseyNumber: number): Player | undefined {
    const player = this.players.find((p: Player) => p.jerseyNumber === jerseyNumber);
    return player || undefined;

  }

  public getNextPlayer(): Player {
    this.index >= this.players.length - 1 ? this.index = 0 : this.index++;
    return this.players[this.index];
  }

  public getPreviousPlayer(): Player {
    this.index <= 0 ? this.index = this.players.length - 1 : this.index--;
    return this.players[this.index];
  }
}
