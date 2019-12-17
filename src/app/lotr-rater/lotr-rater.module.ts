import {NgModule} from '@angular/core';
import {LotrCharacterSelectorComponent} from './character-selection/lotr-character-selector.component';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
  declarations: [LotrCharacterSelectorComponent],
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  exports: [LotrCharacterSelectorComponent]
})
export class LotrRaterModule {
}
