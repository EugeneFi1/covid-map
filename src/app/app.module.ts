import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { ShowTotalNumbersComponent } from 'src/app/components/show-total-numbers/show-total-numbers.components';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInfoComponent } from './components/auth-info/auth-info.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { TotalInfoComponent } from './components/total-info/total-info.component';
import { StyleDirective } from './directives/style.directive';
import { IfnotDirective } from './directives/ifnot.directive';
import { MultiplePipe } from './pipes/multiply.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShowTotalNumbersComponent,
    HeaderComponent,
    AuthInfoComponent,
    LeftPanelComponent,
    TotalInfoComponent,
    StyleDirective,
    IfnotDirective,
    MultiplePipe,
  ],
  exports: [
    ShowTotalNumbersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
