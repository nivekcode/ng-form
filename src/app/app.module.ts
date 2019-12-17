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
import {LotrAppComponent} from './lotr-app/lotr-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    MultiplyCounterComponent,
    ReactiveMultiplyCounterFormComponent,
    LotrAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PlayersModule,
    LotrRaterModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
