import { Component, OnInit } from '@angular/core';
import { Ingrident } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'] 
})
export class ShoppingListComponent implements OnInit  {

  ingredients : Ingrident[] ; 

  constructor( private shoppingListService :  ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngridients() ; 
    this.shoppingListService.ingridientChanged.subscribe(
      (ing : Ingrident[]) =>{
        this.ingredients =  ing ; 
      }
    )
  }

 

}
