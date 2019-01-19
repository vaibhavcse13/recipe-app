import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingrident } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingrdientName') nameInputRef : ElementRef ;
  @ViewChild('ingrdientAmount') amountInputRef  : ElementRef;
  constructor(private shoppingListService :  ShoppingListService) { }

  ngOnInit() {
  }

  createIngridient() {
    const name =  this.nameInputRef.nativeElement.value ;
    const amount =  this.amountInputRef.nativeElement.value ;
    const ingridient =  new Ingrident(name , amount)
    this.shoppingListService.addIngredient(ingridient);
    this.nameInputRef.nativeElement.value = '' ;
    this.amountInputRef.nativeElement.value = '';

  }

}
