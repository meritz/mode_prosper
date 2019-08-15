import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../../services/produits.service';
import { Product } from '../../../models/interface-produits';
import { NavController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';




@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.page.html',
  styleUrls: ['./list-produits.page.scss'],
})
export class ListProduitsPage implements OnInit {
  ProduitsListe: Product[];
  nom: string = "";

  constructor(
    public navCtrl: NavController,
    public articleService: ProduitsService,
    private auth: AuthService,
    
  ) { }

  ngOnInit() {
    this.ProduitsListe = this.articleService.getlistArticles();
    console.log(this.articleService.getlistArticles);
  }

  signOut() {
    this.auth.signOut();
  }

  
  showDetails(produit: any): void {
    this.navCtrl.navigateForward(['../admins/details']);
    this.articleService.getlistArticles = produit;
  }
}
