import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HeaderComponent } from "./core/header/header.component";
import { LoginComponent } from "./user/login/login.component";
import { FooterComponent } from "./core/footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { CatalogComponent } from "./posts/catalog/catalog.component";
import { CreatePostComponent } from "./posts/create-post/create-post.component";
import { DetailsComponent } from "./posts/details/details.component";
import { EditPostComponent } from "./posts/edit-post/edit-post.component";
import { RegisterComponent } from "./user/register/register.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, CatalogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'Project-Retake';
}
