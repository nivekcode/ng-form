import {NgModule} from '@angular/core';
import {PlayersService} from './players.service';
import {PlayersSelectorComponent} from './players-selector.component';
import {PlayersDemoComponent} from './players-demo.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {PlayersPreviewComponent} from './players-preview.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [PlayersDemoComponent, PlayersSelectorComponent, PlayersPreviewComponent],
  exports: [PlayersDemoComponent],
  providers: [PlayersService]
})
export class PlayersModule {
}
