import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Practice1Component } from './practice1/practice1.component';
import { Practice2Component } from './practice2/practice2.component';
import { Practice3Component } from './practice3/practice3.component';

import {NgPipesModule} from 'ngx-pipes';
import { Project1Component } from './project1/project1.component';
import { Practice4Component } from './practice4/practice4.component';

@NgModule({
  declarations: [
    AppComponent,
    Practice1Component,
    Practice2Component,
    Practice3Component,
    Project1Component,
    Practice4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
