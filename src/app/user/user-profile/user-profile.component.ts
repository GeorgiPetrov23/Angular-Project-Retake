import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  standalone: true
})
export class UserProfileComponent {
  get username(): string{
    return this.userService.user?.username || '';
  }
  get email(): string{
    return this.userService.user?.email || '';
  }

  constructor(private userService: UserService) {}
}
