import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ingredientsValidator } from '../../utils/ingredients-format.validator';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe, RecipeforEdit } from '../../types/recipe';

@Component({
  selector: 'app-edit-post',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css',
  standalone: true
})
export class EditPostComponent implements OnInit{

  recipe: Recipe | undefined = undefined;
  form = new FormGroup({
    title: new FormControl('', []),
    ingredients: new FormControl('', [ingredientsValidator('ingredients')]),
    instructions: new FormControl('', []),
    imageUrl: new FormControl('', [])
  })

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const { recipeId } = this.route.snapshot.params;
    this.apiService.getSingleRecipe(recipeId).subscribe((recipe) => {
      this.recipe = recipe;
      this.form.get('title')?.setValue(recipe?.title);
      this.form.get('ingredients')?.setValue(recipe?.ingredients.join(', '));
      this.form.get('instructions')?.setValue(recipe?.instructions);
      this.form.get('imageUrl')?.setValue(recipe?.imageUrl);
      console.log(this.recipe);
    });
  }
  
  editPost(){
    const title = this.form.get('title')!.value;
    const ingredients = this.form.get('ingredients')!.value;
    const instructions = this.form.get('instructions')!.value;
    const imageUrl = this.form.get('imageUrl')!.value;
    const { recipeId } = this.route.snapshot.params;

    console.log(title);

    this.apiService.editPost(title as string, ingredients as string, instructions as string, imageUrl as string, recipeId).subscribe(() => {
      this.router.navigate(['/recipes']);
    })
  }
}
