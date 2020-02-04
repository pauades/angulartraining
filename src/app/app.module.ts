import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Container1Component } from './components/container1/container1.component';
import { Dumb1Component } from './components/dumb1/dumb1.component';
import { Dumb11Component } from './components/dumb11/dumb11.component';
import { Dumb12Component } from './components/dumb12/dumb12.component';
import { Dumb13Component } from './components/dumb13/dumb13.component';
import { ImageHolderComponent } from './components/image-holder/image-holder.component';

@NgModule({
  declarations: [
    AppComponent,
    Container1Component,
    Dumb1Component,
    Dumb11Component,
    Dumb12Component,
    Dumb13Component,
    ImageHolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
