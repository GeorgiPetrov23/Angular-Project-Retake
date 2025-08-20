import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ingredientsValidator } from '../../utils/ingredients-format.validator';

@Component({
  selector: 'app-create-post',
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
  standalone: true
})
export class CreatePostComponent {

  constructor(private apiService: ApiService) {}

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    ingredients: new FormControl('', [ingredientsValidator('ingredients'), Validators.required]),
    instructions: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required])
  })

  createPost(){
    const ingredientsArr = this.form.value.ingredients?.split(', ');
    console.log(ingredientsArr);
    console.log(this.form.value);
    console.log(this.form.invalid);
    console.log(this.form.errors);
    // this.apiService.createPost(title, ingredientsArr, instructions, imageUrl).subscribe((data) => {
    //   console.log('pomosht');
    //   // console.log(data);
    // })
  }
}
