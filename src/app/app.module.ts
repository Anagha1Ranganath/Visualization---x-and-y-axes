import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartComponent} from './shared/app.chart';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
