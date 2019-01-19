import { Ingrident } from '../shared/ingredient.model';

export class Recipe {

    public name : string ;
    public description : string ;
    public imagePath : string ;
    public ingridients : Ingrident[] ;

    constructor(name : string , description : string , imagePath :string , ingridient :  Ingrident[]){
        this.name = name  ;
        this.description = description ;
        this.imagePath = imagePath ;
        this.ingridients =  ingridient ;
    }
}