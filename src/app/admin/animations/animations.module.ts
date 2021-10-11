import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AnimationsComponent } from './animations.component';

const route: Routes = [
  { path: '', component: AnimationsComponent },
  { path: '**', component: AnimationsComponent },
]

@NgModule({
  declarations: [AnimationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class AnimationsModule { }
