import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-create-post',
  imports: [],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
  standalone: true
})
export class CreatePostComponent {

  constructor(private apiService: ApiService) {}

  // createPost(event: Event, title: string, ingredients: string, instructions: string, imageUrl: string){
  //   event.preventDefault();
  //   const ingredientsArr = ingredients.split(', ');
  //   console.log(title);
  //   console.log(ingredientsArr);
  //   console.log(instructions);
  //   console.log(imageUrl);
  //   this.apiService.createPost(title, ingredientsArr, instructions, imageUrl).subscribe((data) => {
  //     console.log('pomosht');
  //     // console.log(data);
  //   })
  // }
}
