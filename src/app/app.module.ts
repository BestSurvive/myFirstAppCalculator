import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule, ReactiveFormsModule} from '@angular/forms'; //per capire i paarametri passati dall'esetrno

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalcolatriceComponent } from './calcolatrice/calcolatrice.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalcolatriceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
