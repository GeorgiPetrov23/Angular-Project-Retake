import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ingredientsValidator } from '../../utils/ingredients-format.validator';

@Component({
  selector: 'app-edit-post',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css',
  standalone: true
})
export class EditPostComponent {
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    ingredients: new FormControl('', [ingredientsValidator('ingredients'), Validators.required]),
    instructions: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required])
  })


  editPost(){

  }
}
