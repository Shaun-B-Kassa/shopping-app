import { Component,
         OnInit,
         ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


import { Ingredient} from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f') itemForm: NgForm;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.selectedIngredient.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.itemForm.setValue({
          name: this.shoppingListService.getIngredient(index).name,
          amount: this.shoppingListService.getIngredient(index).amount
        })
      }
    )
  }


  onAddItem(f: NgForm){
    const newItem = new Ingredient(f.value.name,f.value.amount);
    if(this.editMode === true) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newItem);
    } else {
      this.shoppingListService.addIngredient(newItem);
    }
      this.editMode = false;
      this.itemForm.reset();

  }

  onClear() {
    this.itemForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
