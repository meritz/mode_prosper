import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddCategoriePage } from './add-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: AddCategoriePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddCategoriePage]
})
export class AddCategoriePageModule {}
