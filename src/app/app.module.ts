import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartComponent} from './shared/app.chart';
import { FormsModule, FormBuilder } from '@angular/forms';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    FormBuilder
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
