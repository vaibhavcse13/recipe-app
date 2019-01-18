import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingrident } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingrdientName') nameInputRef : ElementRef ;
  @ViewChild('ingrdientAmount') amountInputRef  : ElementRef;
  @Output() newIngrident = new EventEmitter<{name : string , amount:number}>();
  constructor() { }

  ngOnInit() {
  }

  createIngridient() {
    const name =  this.nameInputRef.nativeElement.value ;
    const amount =  this.amountInputRef.nativeElement.value ;
    const ingridient =  new Ingrident(name , amount)
    this.newIngrident.emit(ingridient);
    this.nameInputRef.nativeElement.value = '' ;
    this.amountInputRef.nativeElement.value = '';

  }

}
