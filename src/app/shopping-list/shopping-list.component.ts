import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  mySubscription: Subscription;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.mySubscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) =>{
        this.ingredients = ingredients;
      }
    )
  }

  onEditItem(index: number){
    this.shoppingListService.selectedIngredient.next(index);
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
}
