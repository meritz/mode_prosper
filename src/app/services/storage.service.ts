import { Product } from '../../models/interface-produits';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


const ITEMS_KEY = 'my-items';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }


  // CREATE
  addItem(item: Product): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Product[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      } else {
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }

  // READ
  getItems(): Promise<Product[]> {
    return this.storage.get(ITEMS_KEY);
  }

  // UPDATE
  updateItem(item: Product): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Product[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let newItems: Product[] = [];

      for (let i of items) {
        if (i.id === item.id) {
          newItems.push(item);
        } else {
          newItems.push(i);
        }
      }

      return this.storage.set(ITEMS_KEY, newItems);
    });
  }

  // DELETE
  deleteItem(id: number): Promise<Product> {
    return this.storage.get(ITEMS_KEY).then((items: Product[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let toKeep: Product[] = [];

      for (let i of items) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }

}
