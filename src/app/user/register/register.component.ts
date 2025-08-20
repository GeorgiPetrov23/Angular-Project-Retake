import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { UserService } from '../user.service';
import { emailValidator } from '../../utils/email.validator';
import { DOMAINS } from '../../constants';
import { matchPasswordsValidator } from '../../utils/match-passwords.validator';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: true
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router) {} 

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, emailValidator(DOMAINS)]),
    passGroup: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      rePassword: new FormControl('', [Validators.required])
    }, {
      validators: [matchPasswordsValidator('password', 'rePassword')]
    }),
  });

  get passGroup() {
    return this.form.get('passGroup');
  }

  register() {
    const {username, email, passGroup:{password, rePassword} = {}} = this.form.value;
    this.userService.register(username!, email!, password!, rePassword!).subscribe(() =>{
      this.router.navigate(['/recipes']);
    })
  }


}
