import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UiKitsComponent } from './ui-kits.component';

const route: Routes = [
  { path: '', component: UiKitsComponent },
  { path: '**', component: UiKitsComponent },
]

@NgModule({
  declarations: [UiKitsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class UiKitsModule { }
