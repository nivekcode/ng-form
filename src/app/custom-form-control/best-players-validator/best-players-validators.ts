import {FormControl} from '@angular/forms';

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
