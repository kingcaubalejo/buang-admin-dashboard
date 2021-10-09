import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartComponent } from './chart.component';
import { RouterModule, Routes } from '@angular/router';
import { LineComponent } from './line/line.component';
import { BubbleComponent } from './bubble/bubble.component';
import { BarComponent } from './bar/bar.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { PieComponent } from './pie/pie.component';
import { PolarAreaComponent } from './polar-area/polar-area.component';
import { RadarComponent } from './radar/radar.component';
import { ScatterComponent } from './scatter/scatter.component';

import { ChartsModule } from 'ng2-charts';

const route: Routes = [
  { path: '', component: ChartComponent }, 
  { path: '**', component: ChartComponent }
];

@NgModule({
  declarations: [
    ChartComponent,
    LineComponent,
    BubbleComponent,
    BarComponent,
    DoughnutComponent,
    LineComponent,
    PieComponent,
    PolarAreaComponent,
    RadarComponent,
    ScatterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ChartsModule,
  ]
})
export class ChartModule { }
