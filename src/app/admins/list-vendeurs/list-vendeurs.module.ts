import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListVendeursPage } from './list-vendeurs.page';

const routes: Routes = [
  {
    path: '',
    component: ListVendeursPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListVendeursPage]
})
export class ListVendeursPageModule {}
