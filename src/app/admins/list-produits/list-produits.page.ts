import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../../services/produits.service';
import { Product } from '../../../models/interface-produits';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.page.html',
  styleUrls: ['./list-produits.page.scss'],
})
export class ListProduitsPage implements OnInit {
  ProduitsListe: Product[];

  constructor(public navCtrl: NavController, public articleService: ProduitsService) { }


  ngOnInit() {
    this.ProduitsListe = this.articleService.getlistArticles();
    console.log(this.articleService.getlistArticles);
  }

}
