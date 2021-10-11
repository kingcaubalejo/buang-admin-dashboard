import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsComponent } from './widgets.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
  { path: '', component: WidgetsComponent },
  { path: '**', component: WidgetsComponent },
]

@NgModule({
  declarations: [WidgetsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class WidgetsModule { }
