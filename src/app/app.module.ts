import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CounterComponent} from './counter.component';
import {TemplateDrivenFormComponent} from './template-driven-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveFormComponent} from './reactive-form.component';
import {MultiplyCounterComponent} from './multiply-counter.component';
import {ReactiveMultiplyCounterFormComponent} from './reactive-multiply-counter-form.component';
import {PlayersModule} from './players/players.module';
import {LotrRaterModule} from './lotr-rater/lotr-rater.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    MultiplyCounterComponent,
    ReactiveMultiplyCounterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PlayersModule,
    LotrRaterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
