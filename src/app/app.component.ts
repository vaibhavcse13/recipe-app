import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';
  currentView :  string  = 'recipe' ; 
  viewChanged(viewChangeData){
    console.log(viewChangeData)
    this.currentView  = viewChangeData ;
  }
}
