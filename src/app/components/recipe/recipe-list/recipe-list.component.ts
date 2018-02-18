import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chilli Dogs', 'Not literally a dog, please chillax. The name was taken randomly. I absolutely love dogs bro', `https://leitesculinaria.com/wp-content/uploads/fly-images/103748/chili-dogs-recipe-400x300-c.jpg`),
    new Recipe('Pan Cakes', 'Delicious sweet Pan Cakes umm yeah. Let me know in the mail what addons you would like',
     'http://www.sigmalive.com/en/application/cache/default/images/news/400x300/cake.png')
  ];
  constructor() { }

  ngOnInit() {
  }

}
