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
    const {apiUrl} = environment;

    return this.http.get<Recipe[]>(`${apiUrl}/recipes`);
  }

  getSingleRecipe(id: string){
    const {apiUrl} = environment;

    return this.http.get<Recipe>(`${apiUrl}/recipes/${id}`)
  }
}
