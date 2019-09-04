import {NgModule} from '@angular/core';
import {LotrCharacterSelectorComponent} from './character-selection/lotr-character-selector.component';

@NgModule({
  declarations: [LotrCharacterSelectorComponent],
  exports: [LotrCharacterSelectorComponent]
})
export class LotrRaterModule {
}
