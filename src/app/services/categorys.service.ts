import { Injectable } from '@angular/core';
import { Category } from '../../models/interface-category';

@Injectable({
  providedIn: 'root'
})
export class CategorysService {

  private categories: Category[] = [
    {
      title: 'Vetements',
      description: 'description',
      icon: 'shirt'
    },
    {
      title: 'Electroniques',
      description: 'description',
      icon: 'phone-portrait'
    },
    {
      title: 'mode & Accessoires',
      description: 'description',
      icon: 'bowtie'
    },
    {
      title: 'chaussures',
      description: 'description',
      icon: 'archive'
    },
  ];



  getlistcategories() {
    return this.categories;
  }

  constructor() { }
}
