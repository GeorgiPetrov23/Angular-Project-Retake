import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';
import { Recipe } from '../../types/recipe';
import { UserService } from '../../user/user.service';
import { User } from '../../types/user';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  standalone: true
})
export class DetailsComponent implements OnInit{
  recipe = {} as Recipe;
  user = {} as User;
  userId:string = '';
  recipeId: string = '';

  isOwner: boolean = false;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private userService: UserService, private router: Router) {}

  private ownerId(r: any): string | undefined {
    const cb = r?.createdBy;
    return typeof cb === 'string' ? cb : (cb?._id ?? cb?.id);
  }

  // ngOnInit(): void {
  //   const id = this.route.snapshot.params['recipeId'];

  //   this.apiService.getSingleRecipe(id).subscribe((recipe) => {
  //     this.recipe = recipe;
  //     this.recipeId = recipe.createdBy._id;
  //   })
    
  //   this.userService.getProfile().subscribe((user) => {
  //     this.user = user;
  //     this.userId = user.id;
  //   })

  //   console.log(this.recipeId);
  //   console.log(this.userId);
  // }

    ngOnInit(): void {
    const id = this.route.snapshot.params['recipeId'];

    forkJoin({
      recipe: this.apiService.getSingleRecipe(id),
      user: this.userService.getProfile()
    }).subscribe(({ recipe, user }) => {
      this.recipe = recipe;
      this.user = user;

      this.recipeId = this.ownerId(recipe) ?? '';
      this.userId = user?._id ?? '';

      this.isOwner = !!this.recipeId && !!this.userId && this.recipeId === this.userId;

      console.log('recipeId:', this.recipeId);
      console.log('userId:', this.userId);
      console.log('isOwner:', this.isOwner);
    });
  }

  
  deleteRecipe(){
    const id = this.route.snapshot.params['recipeId'];
    this.apiService.deleteRecipe(id).subscribe(() =>{
      this.router.navigate(['/recipes']);
    });
  }

}
