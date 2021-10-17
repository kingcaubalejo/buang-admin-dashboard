import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { CardContentComponent } from './card-content/card-content.component';
import { CardFooterComponent } from './card-footer/card-footer.component';

const route: Routes = [
  { path: '', component: CardsComponent },
  { path: '**', component: CardsComponent },
]


@NgModule({
  declarations: [
    CardsComponent,
    CardContentComponent,
    CardFooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class CardsModule { }
