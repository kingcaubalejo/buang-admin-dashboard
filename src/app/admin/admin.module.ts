import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { HeaderComponent } from '../core/header/header.component';
import { SidebarComponent } from '../core/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { 
    path: '', component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(d => d.DashboardModule)
      }
    ]

  },
  { path: '**', redirectTo: '/'} //Not Found Page
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
