import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Recipe } from '../../types/recipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog',
  imports: [RouterLink],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
  standalone: true
})
export class CatalogComponent implements OnInit {
  recipes: Recipe[] = []
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    })
  }

}
