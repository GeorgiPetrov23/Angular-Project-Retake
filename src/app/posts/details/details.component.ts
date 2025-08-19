import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Recipe } from '../../types/recipe';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  standalone: true
})
export class DetailsComponent implements OnInit{
  recipe = {} as Recipe
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['recipeId'];
    console.log(this.route.snapshot.params);

    this.apiService.getSingleRecipe(id).subscribe((recipe) => {
      this.recipe = recipe;
    })
  }

}
