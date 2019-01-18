import { Component, OnInit } from '@angular/core';
import { Ingrident } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingrident[] = [
    new Ingrident("Apple" , 5),
    new Ingrident("Tomatoo" , 10)
  ] ;

  constructor() { }

  ngOnInit() {
  }

  ingridientAdded(data){
    console.log(data)
    let  ing =  new Ingrident(data.name , data.amount);
    this.ingredients.push(ing);
  }

}
