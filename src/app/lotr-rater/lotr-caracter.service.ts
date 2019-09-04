import {Injectable} from '@angular/core';

export interface Character {
  id: number;
  name: string;
  class: 'dwarf' | 'elb' | 'wizard' | 'hobbit';
  imageName: string;
}

@Injectable({
  providedIn: 'root'
})
export class LotrCaracterService {

  private characters: Character[] = [
    {id: 1, name: 'Gladriel', class: 'wizard', imageName: 'galadriel'},
    {id: 2, name: 'Legolas', class: 'elb', imageName: 'gimli'},
    {id: 3, name: 'Gollum', class: 'hobbit', imageName: 'gollum'},
    {id: 4, name: 'Gimli', class: 'dwarf', imageName: 'legolas'},
    {id: 5, name: 'Saruman', class: 'wizard', imageName: 'saruman'}
  ];
  private index = -1;

  public getNextCharacter(): Character {
    this.index >= this.characters.length - 1 ? this.index = 0 : this.index++;
    return this.characters[this.index];
  }

  public getPreviousCharacter(): Character {
    this.index <= 0 ? this.index = this.characters.length - 1 : this.index--;
    return this.characters[this.index];
  }
}
