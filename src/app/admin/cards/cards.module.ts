import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';

const route: Routes = [
  { path: '', component: CardsComponent },
  { path: '**', component: CardsComponent },
]


@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class CardsModule { }
