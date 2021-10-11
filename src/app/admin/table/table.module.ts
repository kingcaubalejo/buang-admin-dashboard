import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './table.component';

const route: Routes = [
  { path: '', component: TableComponent },
  { path: '**', component: TableComponent },
]

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class TableModule { }
