import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { CatalogComponent } from './posts/catalog/catalog.component';
import { DetailsComponent } from './posts/details/details.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './guards/auth.guard';
import { EditPostComponent } from './posts/edit-post/edit-post.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    // User routing
    { path: 'login', component: LoginComponent, },
    { path: 'register', component: RegisterComponent,},
    { path: 'profile', component: UserProfileComponent, },

    //Recipe routing
    {path: 'recipes', children: [
        {path: '', component: CatalogComponent},
        {path: ':recipeId', component: DetailsComponent},
        {path: ':recipeId/edit', component: EditPostComponent},
    ]},
    {path: 'create', component: CreatePostComponent, canActivate: [AuthGuard]},

    {path: '404', component: ErrorPageComponent},
    {path: '**', redirectTo: '/404'}

];
