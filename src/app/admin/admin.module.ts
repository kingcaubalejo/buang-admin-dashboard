import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { HeaderComponent } from '../core/header/header.component';
import { SidebarComponent } from '../core/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/admin/dashboard',
    pathMatch: 'full'
  },
  { 
    path: '', component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(d => d.DashboardModule)
      }, {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(s => s.SettingsModule)
      }, {
        path: 'charts',
        loadChildren: () => import('./chart/chart.module').then(c => c.ChartModule)
      }
    ]

  },
  { path: '**', redirectTo: '/admin'} //Not Found Page
]

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
