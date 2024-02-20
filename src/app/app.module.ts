import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WebLibComponent, WebLibModule } from 'web-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, WebLibComponent, WebLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
