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
      }, {
        path: 'animations',
        loadChildren: () => import('./animations/animations.module').then(c => c.AnimationsModule)
      }, {
        path: 'cards',
        loadChildren: () => import('./cards/cards.module').then(c => c.CardsModule)
      }, {
        path: 'components',
        loadChildren: () => import('./components/components.module').then(c => c.ComponentsModule)
      }, {
        path: 'maps',
        loadChildren: () => import('./maps/maps.module').then(c => c.MapsModule)
      }, {
        path: 'tables',
        loadChildren: () => import('./table/table.module').then(c => c.TableModule)
      }, {
        path: 'ui-kits',
        loadChildren: () => import('./ui-kits/ui-kits.module').then(c => c.UiKitsModule)
      }, {
        path: 'widgets',
        loadChildren: () => import('./widgets/widgets.module').then(c => c.WidgetsModule)
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
