import {FormControl, NG_VALIDATORS} from '@angular/forms';
import {Directive} from '@angular/core';

const bestPlayers = [
  'Sergio Ramos',
  'Eden Hazard',
  'Vinicius Junior',
  'Karim Benzema'
];

export const validatePlayer = (c: FormControl) => {

  return bestPlayers.includes(c.value) ? null : {
    isOneOfTheBestPlayers: `Here are the best players in case you forgot ;) ${[...bestPlayers]}`
  };
};

@Directive({
  selector: '[validatePlayer]',
  providers: [
    {provide: NG_VALIDATORS, useValue: validatePlayer, multi: true}
  ]
})
export class PlayerValidator {
}
