
import {Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingrident } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeItemSelected = new EventEmitter<Recipe>();
    recipes : Recipe[]  =[ 
        new Recipe('Burger' , "Veg Cheese Burger" , 
            "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fbe%2FBurger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg%2F1200px-Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg&f=1",
            [ new Ingrident("Buns" , 10 ) ,
             new  Ingrident('Sauce' , 10)]),
             new Recipe('Pizza' , "Farmhouse Pizza" , 
             "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.engelvoelkers.com%2Fwp-content%2Fuploads%2F2014%2F07%2Fpizza-stock.jpg&f=1",
             [ new Ingrident("Dough" , 5 ) ,
              new  Ingrident('Cheese' , 10)])
      ];
    
      // constructor 
    constructor(private shoppingListService : ShoppingListService)  {

    }
    getRecipies() {
        return this.recipes.slice() ;
    }

    addRecipeIngridientToShoppingList(ingredients : Ingrident[]){
        this.shoppingListService.addMultipleIngridient(ingredients);
    }
}