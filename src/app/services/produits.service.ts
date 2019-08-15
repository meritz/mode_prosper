import { Injectable } from '@angular/core';
import { Product } from 'src/models/interface-produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  private Articles: Product[] = [
    {
      title: 'Louis Viton',
      description: 'Vetements pour homme,arrivage de Londres,taille XL',
      price: 8000,
      category: {
        title: 'Vetements',
        description: 'Vetements pour homme,arrivage de Londres,taille XL',
        icon: '',
      },
      createdAt: Date.now(),
      state: 'Neuf',
      city: 'londres',
      id: 1,
      commissions: 1000,
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
      title: 'Chaussure',
      description: 'Marque Adidas',
      price: 15000,
      category: {
        title: 'Chaussure',
        description: 'Model Adidas taille 41',
        icon: '',
      },
      createdAt: Date.now(),
      state: 'Neuf',
      city: 'londres',
      id: 2,
      commissions: 500,
      averageStar: 5,
      availability: {
        available: true,
        type: 'livraison',
        feed: 17
      },
      pictures: [
        '../../assets/imgs/Product2/2.jpg',
        '../../assets/imgs/Product2/1.jpg',
        '../../assets/imgs/Product2/3.webp',
        '../../assets/imgs/Product2/4.jpg',
      ]
    },
    {
      title: 'Chaussure',
      description: 'Marque SEBAGO ',
      price: 12000,
      category: {
        title: 'Chaussure',
        description: 'Marque SEBAGO taille 42',
        icon: '',
      },
      createdAt: Date.now(),
      state: 'Neuf',
      city: 'londres',
      id: 3,
      commissions: 500,
      averageStar: 3,
      availability: {
        available: true,
        type: 'livraison',
        feed: 17
      },
      pictures: [
        '../../assets/imgs/Product3/1.jpg',
        '../../assets/imgs/Product3/2.jpg',
        '../../assets/imgs/Product3/3.webp',
        '../../assets/imgs/Product3/4.jpg',
      ]
    },
    {
      title: 'Chaussure pour Homme',
      description: 'Marque EAGLE ',
      price: 18000,
      category: {
        title: 'Chaussure',
        description: 'Chaussure de marque EAGLE disponible taille 45',
        icon: '',
      },
      createdAt: Date.now(),
      state: 'Neuf',
      city: 'londres',
      id: 4,
      commissions: 1500,
      averageStar: 5,
      availability: {
        available: true,
        type: 'livraison',
        feed: 17
      },
      pictures: [
        '../../assets/imgs/Product4/1.jpg',
        '../../assets/imgs/Product4/2.jpg',
        '../../assets/imgs/Product4/3.webp',
        '../../assets/imgs/Product4/4.jpg',
      ]
    },

    {
      title: 'Style Homme',
      description: 'Arrivage ITALIE ',
      price: 18000,
      category: {
        title: 'Chaussure',
        description: 'Chaussure de marque EAGLE disponible taille 45',
        icon: '',
      },
      createdAt: Date.now(),
      state: 'Neuf',
      city: 'londres',
      id: 5,
      commissions: 1500,
      averageStar: 5,
      availability: {
        available: true,
        type: 'livraison',
        feed: 17
      },
      pictures: [
        '../../assets/imgs/Product1/4.jpg',
        '../../assets/imgs/Product4/2.jpg',
        '../../assets/imgs/Product4/3.webp',
        '../../assets/imgs/Product4/4.jpg',
      ]
    },
    {
      title: 'Chaussure pour Homme',
      description: 'Marque MOCASSIN ',
      price: 18000,
      category: {
        title: 'Chaussure',
        description: 'Chaussure de marque EAGLE disponible taille 45',
        icon: '',
      },
      createdAt: Date.now(),
      state: 'Neuf',
      city: 'londres',
      id: 6,
      commissions: 1500,
      averageStar: 5,
      availability: {
        available: true,
        type: 'livraison',
        feed: 17
      },
      pictures: [
        '../../assets/imgs/Product3/2.jpg',
        '../../assets/imgs/Product4/2.jpg',
        '../../assets/imgs/Product4/3.webp',
        '../../assets/imgs/Product4/4.jpg',
      ]
    },
    {
      title: 'KAPPA',
      description: 'Par dessus pour homme ',
      price: 8000,
      category: {
        title: 'Vetements',
        description: 'Chaussure de marque EAGLE disponible taille 45',
        icon: '',
      },
      createdAt: Date.now(),
      state: 'Neuf',
      city: 'londres',
      id: 7,
      commissions: 1500,
      averageStar: 5,
      availability: {
        available: true,
        type: 'livraison',
        feed: 17
      },
      pictures: [
        '../../assets/imgs/Product1/5.jpg',
        '../../assets/imgs/Product4/2.jpg',
        '../../assets/imgs/Product4/3.webp',
        '../../assets/imgs/Product4/4.jpg',
      ]
    },
  ];



  //
  getlistArticles() {
    return this.Articles;
  }

  constructor() { }
}
