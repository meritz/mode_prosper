import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'lists-produits', loadChildren: './lists-produits/lists-produits.module#ListsProduitsPageModule' },
  { path: 'panier', loadChildren: './panier/panier.module#PanierPageModule' },
  { path: 'confirmation', loadChildren: './confirmation/confirmation.module#ConfirmationPageModule' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
