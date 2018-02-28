import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute , Params, Router} from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;
  id: number;
  
  constructor(private recipesService: RecipesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
   this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.selectedRecipe = this.recipesService.getRecipe(this.id);
   })



  }

  onAddToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['../', this.id,'edit'], {relativeTo: this.route});
  }

}
