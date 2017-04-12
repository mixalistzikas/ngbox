import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgBoxModule } from 'ngbox/ngbox.module';
import { NgBoxService } from 'ngbox/ngbox.service';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      NgBoxModule,
      BrowserModule,
      CommonModule
  ],
  providers: [ NgBoxService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
