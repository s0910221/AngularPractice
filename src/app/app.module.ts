import { BmiService } from './bmi.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Practice1Component } from './practice1/practice1.component';
import { Practice2Component } from './practice2/practice2.component';
import { Practice3Component } from './practice3/practice3.component';

import { NgPipesModule } from 'ngx-pipes';
import { Project1Component } from './project1/project1.component';
import { Practice4Component } from './practice4/practice4.component';
import { Hw1Component } from './hw1/hw1.component';
import { Practice5Component } from './practice5/practice5.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { Practice6Component } from './practice6/practice6.component';
import { HightlightDirective } from './hightlight.directive';
import { Practice61Component } from './practice6-1/practice6-1.component';
import { DyclassComponent } from './dyclass/dyclass.component';
import { Jq1Component } from './jq1/jq1.component';
import { Practice7Component } from './practice7/practice7.component';

@NgModule({
  declarations: [
    AppComponent,
    Practice1Component,
    Practice2Component,
    Practice3Component,
    Project1Component,
    Practice4Component,
    Hw1Component,
    Practice5Component,
    InputButtonComponent,
    Practice6Component,
    HightlightDirective,
    Practice61Component,
    DyclassComponent,
    Jq1Component,
    Practice7Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgPipesModule
  ],
  providers: [BmiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
