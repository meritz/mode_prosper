import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../../services/produits.service';
import { Product } from '../../../models/interface-produits';
import { itemCart } from '../../../models/interface-itemCart';
import { Storage } from '@ionic/storage';
import { NavController, ToastController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  slideOpts = {
    autoplay: true,
    loop: true,
  };

  produitdetails: any;

  constructor(
    public navCtrl: NavController,
    public articleService: ProduitsService,
    public storage: Storage,
    public toastController: ToastController,
    private socialSharing: SocialSharing,
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
   }

  ngOnInit() {
    this.produitdetails = this.articleService.getlistArticles;
    console.log(this.articleService.getlistArticles);
  }


  addToCart(produitdetails: Product): void {
    let added: boolean = false;
    //si le panier est vide
    this.storage.get('cart').then((data: itemCart[]) => {
      if (data === null || data.length === 0) {
        data = [];
        data.push({
          item: produitdetails,
          qty: 1,
          amount: produitdetails.price,
        });
      }
      else {
        // si le panier n'est pas vide
        for (let i = 0; i < data.length; i++) {
          const element: itemCart = data[i];
          if (produitdetails.id === element.item.id) {
            //  le panier n'est pas vide et contient l'article
            element.qty += 1;
            element.amount += produitdetails.price;
            added = true;
          }
        }
        if (!added) {
          //  le panier n'est pas vide et ne contient pas l'article
          data.push({
            item: produitdetails,
            qty: 1,
            amount: produitdetails.price,
          });
        }
      }
      this.storage.set('cart', data)
        .then(async data => {
          const toast = await this.toastController.create({
            message: 'votre panier a été mis à jour',
            duration: 2000,
            showCloseButton: true,
          });
          toast.present();
        })
        .catch(err => {
          console.log('Erreur', err);
        });
    });
  }

  
  onOpenCart() {
    this.navCtrl.navigateForward(['../admins/cart']);
  }

}
