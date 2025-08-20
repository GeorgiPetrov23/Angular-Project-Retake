import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Recipe } from './types/recipe';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRecipes(){

    return this.http.get<Recipe[]>(`/api/recipes`);
  }

  getSingleRecipe(id: string){
    const {apiUrl} = environment;

    return this.http.get<Recipe>(`/api/recipes/${id}`)
  }

  createPost(title: string, ingredients: string[], instructions: string, imageUrl: string){
    const {apiUrl} = environment;
    const payload = {
      title,
      ingredients,
      instructions,
      imageUrl
    }
    return this.http.post<Recipe>(`/api/recipes`, payload);
  }
}
