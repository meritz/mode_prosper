import { Product } from 'src/models/interface-produits';
import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-add-produits',
  templateUrl: './add-produits.page.html',
  styleUrls: ['./add-produits.page.scss'],
})
export class AddProduitsPage implements OnInit {

  items: Product[] = [];
  newItem: Product = <Product>{};


  constructor(private storageService: StorageService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }

  ngOnInit() {
  }


  // CREATE
  addItem() {
    this.newItem.createdAt = Date.now();
    this.newItem.id = Date.now();

    this.storageService.addItem(this.newItem).then(item => {
      this.newItem = <Product>{};
      this.showToast('Item added!');
      this.loadItems(); // Or add it to the array directly
    });
  }

  // READ
  loadItems() {
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }

  // UPDATE
  updateItem(item: Product) {
    item.title = `UPDATED: ${item.title}`;
    item.createdAt = Date.now();

    this.storageService.updateItem(item).then(item => {
      this.showToast('Item updated!');
      this.loadItems(); // Or update it inside the array directly
    });
  }

  // DELETE
  deleteItem(item: Product) {
    this.storageService.deleteItem(item.id).then(item => {
      this.showToast('Item removed!');
      this.loadItems(); // Or splice it from the array directly
    });
  }

  // Helper
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
