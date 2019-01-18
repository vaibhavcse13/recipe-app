import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector : 'app-header' ,
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css']

})
export class  HeaderComponent {
    @Output() viewChange  = new EventEmitter<string>();

    constructor() {}

   
      
    OnViewChanges(selectedView){
        this.viewChange.emit(selectedView)
    }
}