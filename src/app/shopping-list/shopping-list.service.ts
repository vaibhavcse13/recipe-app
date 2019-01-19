
import {Ingrident} from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService {

  ingridientChanged =  new EventEmitter<Ingrident[]>();
  private  ingredients : Ingrident[] = [
        new Ingrident("Apple" , 5),
        new Ingrident("Tomatoo" , 10)
      ] ;
    
    getIngridients() {
        return this.ingredients.slice();

    }
    addIngredient(ingredient : Ingrident){
        this.ingredients.push(ingredient);
        this.ingridientChanged.emit(this.ingredients.slice());
    }

    addMultipleIngridient(ingredients : Ingrident[]){
        this.ingredients.push(...ingredients);
       // this.ingredients = [... this.ingredients , ...ingredients ] // this.ingredients.concat(ingredients);
        this.ingridientChanged.emit(this.ingredients.slice());
    }
    
}