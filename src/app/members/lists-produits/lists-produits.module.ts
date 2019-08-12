import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListsProduitsPage } from './lists-produits.page';

const routes: Routes = [
  {
    path: '',
    component: ListsProduitsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListsProduitsPage]
})
export class ListsProduitsPageModule {}
