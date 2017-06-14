import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProgressBarComponent} from './progressbar/progressbar.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule , FormsModule],
  declarations: [ AppComponent , ProgressBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
