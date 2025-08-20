import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailDirective } from '../../directives/email.directive';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, EmailDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm){
    if(form.invalid){
      console.error("The form is invalid!");
      return;
    }
    this.userService.login();
    this.router.navigate(['/home']);
  }
}
