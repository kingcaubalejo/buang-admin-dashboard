import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { MapsComponent } from './maps.component';

const route: Routes = [
  { path: '', component: MapsComponent },
  { path: '**', component: MapsComponent },
]


@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class MapsModule { }
