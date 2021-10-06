import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ShowTotalNumbersComponent } from 'src/app/components/show-total-numbers/show-total-numbers.components';

@NgModule({
  declarations: [
    AppComponent,
    ShowTotalNumbersComponent
  ],
  exports: [
    ShowTotalNumbersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
