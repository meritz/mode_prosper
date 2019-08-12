import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'dashboard-admin', loadChildren: './dashboard-admin/dashboard-admin.module#DashboardAdminPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'add-produits', loadChildren: './add-produits/add-produits.module#AddProduitsPageModule' },
  { path: 'list-produits', loadChildren: './list-produits/list-produits.module#ListProduitsPageModule' },
  { path: 'list-vendeurs', loadChildren: './list-vendeurs/list-vendeurs.module#ListVendeursPageModule' },
  { path: 'list-admins', loadChildren: './list-admins/list-admins.module#ListAdminsPageModule' },
  { path: 'add-categorie', loadChildren: './add-categorie/add-categorie.module#AddCategoriePageModule' },
  { path: 'statistique', loadChildren: './statistique/statistique.module#StatistiquePageModule' },
  { path: 'etat-ventes', loadChildren: './etat-ventes/etat-ventes.module#EtatVentesPageModule' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
