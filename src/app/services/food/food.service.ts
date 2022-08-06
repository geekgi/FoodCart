import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food=>food.id==id)!;
  }
  getAllFoodsBySearchTerm(searchTerm:string) :Foods[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAll():Foods[]{
    return[
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 510,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 320,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 300,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 200,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 210,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 535,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: ' Chicken Briyani',
        price: 350,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 4.0,
        imageUrl: '/assets/food-7.webp',
        tags: ['SlowFood', 'Briyani', 'Lunch'],
      },
      {
        id: 8,
        name: 'Panner Butter Masala',
        price: 250,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 4.0,
        imageUrl: '/assets/food-8.jpg',
        tags: ['SlowFood', 'Briyani', 'Lunch'],
      }
    ];
  }
}
