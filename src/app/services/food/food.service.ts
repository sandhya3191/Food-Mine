import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  

  constructor() { }

  getFoodById(id : number):Food{
    return this.getAll().find(food=>food.id==id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:String) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 5 },
      { name: 'FastFood', count: 5 },
      { name: 'Pizza', count: 1 },
      { name: 'Lunch', count: 1 },
      { name: 'Sand witch', count: 2 },
      { name: 'Burger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'salad', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll():Food[]{
    return[
      {
        id:1,
        name:'pizza',
        cookTime:'10-20',
        price:25,
        favorite:false,
        origins:['Italy'],
        stars:4.5,
        imageUrl:
        '/assets/images/food-imgg1.avif',
        tags:['FastFood','Pizza','Lunch'],

      },
      {
        id:2,
        name:'Burger',
        cookTime:'20-30',
        price:18,
        favorite:true,
        origins:['Germany','US'],
        stars:4.7,
        imageUrl:'/assets/images/food-img2.avif',
        tags:['FastFood','Burger'],

      },
      {
        id:3,
        name:'Fried Potatoes',
        cookTime:'15-20',
        price:10,
        favorite:true,
        origins:['Belgium','France'],
        stars:4.5,
        imageUrl:'/assets/images/food-imgg3.avif'
        ,
        tags:['FastFood','fry'],

      },
      {
        id:4,
        name:'Sand Witch',
        cookTime:'12-20',
        price:5,
        favorite:false,
        origins:['England'],
        stars:3.5,
        imageUrl:'/assets/images/foodimgg4.avif'
        ,
        tags:['FastFood','Sand witch'],

      },
      {
        id:5,
        name:'Fruit Sald',
        cookTime:'10-20',
        price:20,
        favorite:true,
        origins:['US'],
        stars:4.7,
        imageUrl:'/assets/images/food-img5.avif'
        ,
        tags:['FastFood','Salad','Fruit salad'],

      },
      

    ];
  }
}
