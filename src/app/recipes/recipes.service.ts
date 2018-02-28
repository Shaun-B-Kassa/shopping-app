import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {

  recipes: Recipe[] =[
    new Recipe('Burger',
    'Testy bugger',
    'https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto,fl_lossy/wp-cms/uploads/2017/06/i-1-sonic-burger.jpg',
    [new Ingredient(
      'Buns',
      4
    ),
    new Ingredient(
      'Chesse',
      2
    )]),
    new Recipe('Latte',
    'Testy latte',
    'http://www.latestfreestuff.co.uk/wp-content/uploads/2013/10/free-hot-drink-and-cake1-298x300.jpg',
    [new Ingredient(
      'Cup',
      1
    ),
    new Ingredient(
      'Milk',
      1
    )])
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

}
