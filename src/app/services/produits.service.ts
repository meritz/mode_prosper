import { Injectable } from '@angular/core';
import { Product } from 'src/models/interface-produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  private Articles: Product[] = [
    {
      title: 'television',
      description: 'ipsum ',
      price: 4415,
      category: {
        title: 'Vetements',
        description: '',
        icon: '',
      },
      createdAt: new Date(),
      state: 'Neuf',
      city: 'londres',
      id: '1',
      commissions: 500,
      averageStar: 5,
      availability: {
        available: true,
        type: 'livraison',
        feed: 17
      },
      pictures: [
        '../../assets/imgs/Product1/1.jpg',
        '../../assets/imgs/Product1/2.jpg',
        '../../assets/imgs/Product1/3.webp',
        '../../assets/imgs/Product1/4.jpg',
      ]
    },
    {
      title: 'television',
      description: 'ipsum ',
      price: 4415,
      category: {
        title: 'Vetements',
        description: '',
        icon: '',
      },
      createdAt: new Date(),
      state: 'Neuf',
      city: 'londres',
      id: '1',
      commissions: 500,
      averageStar: 5,
      availability: {
        available: true,
        type: 'livraison',
        feed: 17
      },
      pictures: [
        '../../assets/imgs/Product1/1.jpg',
        '../../assets/imgs/Product1/2.jpg',
        '../../assets/imgs/Product1/3.webp',
        '../../assets/imgs/Product1/4.jpg',
      ]
    },
    {
      title: 'television',
      description: 'ipsum ',
      price: 4415,
      category: {
        title: 'Vetements',
        description: '',
        icon: '',
      },
      createdAt: new Date(),
      state: 'Neuf',
      city: 'londres',
      id: '1',
      commissions: 500,
      averageStar: 5,
      availability: {
        available: true,
        type: 'livraison',
        feed: 17
      },
      pictures: [
        '../../assets/imgs/Product1/1.jpg',
        '../../assets/imgs/Product1/2.jpg',
        '../../assets/imgs/Product1/3.webp',
        '../../assets/imgs/Product1/4.jpg',
      ]
    },
    {
      title: 'television',
      description: 'ipsum ',
      price: 4415,
      category: {
        title: 'Vetements',
        description: '',
        icon: '',
      },
      createdAt: new Date(),
      state: 'Neuf',
      city: 'londres',
      id: '1',
      commissions: 500,
      averageStar: 5,
      availability: {
        available: true,
        type: 'livraison',
        feed: 17
      },
      pictures: [
        '../../assets/imgs/Product1/1.jpg',
        '../../assets/imgs/Product1/2.jpg',
        '../../assets/imgs/Product1/3.webp',
        '../../assets/imgs/Product1/4.jpg',
      ]
    },
  ];



  // 
  getlistArticles() {
    return this.Articles;
  }

  constructor() { }
}
