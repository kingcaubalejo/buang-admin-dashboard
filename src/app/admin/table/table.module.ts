import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AgGridModule } from 'ag-grid-angular';

import { TableComponent } from './table.component';
import { AgridComponent } from './agrid/agrid.component';

const route: Routes = [
  { path: '', component: TableComponent },
  { path: '**', component: TableComponent },
]

@NgModule({
  declarations: [TableComponent, AgridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    AgGridModule.withComponents([]),
  ]
})
export class TableModule { }
