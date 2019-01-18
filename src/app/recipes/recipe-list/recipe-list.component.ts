import { Component, OnInit, Output  , EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() itemSelected =  new EventEmitter<Recipe>();

  recipes : Recipe[]  =[ 
    new Recipe('Recipe1' , "My test Recipe1 " , "https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/ramen-au-miso-au-pesto-et-aux-crevettes-2b6651fd.jpg"),
    new Recipe('Recipe2' , "My test Recipe2 " , "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bbcgoodfood.com%2Fsites%2Fdefault%2Ffiles%2Frecipe_images%2Ftomato-courgette-risotto.png&f=1"),
    new Recipe('Recipe3' , "My test Recipe3 " , "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F960x960%2F3757067.jpg&f=1"),
    new Recipe('Recipe4' , "My test Recipe4 " , "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2.tmbi.com%2FTOH%2FImages%2FPhotos%2F37%2F1200x1200%2Fexps72231_TH153342B02_10_6b-AP(2).jpg&f=1")
  ];
  constructor() { }

  ngOnInit() {
  }

  OnItemIsSeleced(selectedItem : Recipe){
    this.itemSelected.emit(selectedItem);
  }

}
