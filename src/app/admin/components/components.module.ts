import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';

const route: Routes = [
  { path: '', component: ComponentsComponent },
  { path: '**', component: ComponentsComponent }
]

@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class ComponentsModule { }
