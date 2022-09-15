import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './module/app-material.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { ConversionHistoryComponent } from './conversion-history/conversion-history.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CalculatorComponent, ConversionHistoryComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
