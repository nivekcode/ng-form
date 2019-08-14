import {Injectable} from '@angular/core';

export interface Character {
  id: number;
  name: string;
  class: 'dwarf' | 'elb' | 'wizard' | 'hobbit';
}

@Injectable()
export class LotrCaractersService {

  private characters: Character[] = [
    {id: 1, name: 'Gladriel', class: 'wizard'},
    {id: 2, name: 'Legolas', class: 'elb'},
    {id: 3, name: 'Gollum', class: 'hobbit'},
    {id: 4, name: 'Gimli', class: 'dwarf'},
    {id: 5, name: 'Saruman', class: 'wizard'}
  ];
  private index = -1;

  public getCharachter(id: number): Character | undefined {
    const character = this.characters.find((c: Character) => c.id === id);
    return character || undefined;

  }

  public getNextCharacter(): Character {
    this.index >= this.characters.length - 1 ? this.index = 0 : this.index++;
    return this.characters[this.index];
  }

  public getPreviousCharacter(): Character {
    this.index <= 0 ? this.index = this.characters.length - 1 : this.index--;
    return this.characters[this.index];
  }
}
