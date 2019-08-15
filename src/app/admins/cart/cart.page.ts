import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { itemCart } from '../../../models/interface-itemCart';
import { element } from 'protractor';
import { Product } from '../../../models/interface-produits';
import { ToastController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {


  cartItems: itemCart[];
  total: number = 0;


  constructor(
    public storage: Storage,
    public alertCtrl: AlertController,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    this.storage.get('cart')
      .then((data: itemCart[]) => {
        this.cartItems = data;
        this.cartItems.forEach((element: itemCart) => {
          this.total += (element.item.price * element.qty);
        });
      })
      .catch(err => {
        console.log('erreur', err);
      });
  }

}
