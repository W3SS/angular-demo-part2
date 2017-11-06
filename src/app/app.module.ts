import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteDirective } from './quote.directive';
import { NamesDirective } from './names.directive';
import { StatesComponent } from './states/states.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDirective,
    NamesDirective,
    StatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
