import { NgModelDrivenComponent } from './ng-model-driven/ng-model-driven.component';
import { DyclassComponent } from './dyclass/dyclass.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Practice1Component } from './practice1/practice1.component';
import { Practice2Component } from './practice2/practice2.component';
import { Practice3Component } from './practice3/practice3.component';
import { Practice4Component } from './practice4/practice4.component';
import { Practice5Component } from './practice5/practice5.component';
import { Practice6Component } from './practice6/practice6.component';
import { Practice61Component } from './practice6-1/practice6-1.component';
import { Practice7Component } from './practice7/practice7.component';
import { Jq1Component } from './jq1/jq1.component';
import { CallhttpComponent } from './callhttp/callhttp.component';

const routes: Routes = [
    { path: '', redirectTo: 'practice1', pathMatch: 'full' },
    { path: 'practice1', component: Practice1Component },
    { path: 'practice2', component: Practice2Component },
    { path: 'practice3', component: Practice3Component },
    { path: 'practice4', component: Practice4Component },
    { path: 'practice5', component: Practice5Component },
    { path: 'practice6', component: Practice6Component },
    { path: 'practice6-1', component: Practice61Component },
    { path: 'practice7', component: Practice7Component },
    { path: 'dyclass', component: DyclassComponent },
    { path: 'dyclass/:num1/:num2', component: DyclassComponent },
    { path: 'jq1', component: Jq1Component },
    { path: 'callhttp', component: CallhttpComponent },
    { path: 'ngmod', component: NgModelDrivenComponent },
    { path: '**', component: Practice61Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
